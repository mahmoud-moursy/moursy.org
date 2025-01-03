import mitt from "mitt";
import type {APIRoute} from "astro";

export const prerender = false;

const emitter = mitt();
const encoder = new TextEncoder();
const ALLOWED_CHARACTERS = "0123456789+-/*".split('');

let state = "";


export const POST: APIRoute = async ({ request }) => {
    interface Body {
        interaction: "append" | "delete" | "process";
        data: string;
    }

    const body: Body = await request.formData().then(Object.fromEntries);

    switch (body.interaction) {
        case "append":
            if(ALLOWED_CHARACTERS.includes(body.data)) {
                state += body.data;
            }
            break;
        case "delete":
            state = state.substring(0, state.length - 1);
            break;
        case "process":
            try {
                state = eval(state);
            } catch {
                state = ""

                emitter.emit('calc_error');

                return new Response("nope.");
            }

            break;
        default:
            return new Response("nope.")
    }

    emitter.emit('calc_input_received')

    return new Response("Success.")
}

export const GET: APIRoute = async () => {
    let success_callback: () => any;
    let calc_error_callback: () => any;

    const customReadable = new ReadableStream({
        async start(controller) {
            success_callback =  () => {
                controller.enqueue(encoder.encode(`data: ${state}\n\n`))
            };

            calc_error_callback =  () => {
                controller.enqueue(encoder.encode(`data: CALC ERR\n\n`))
            }

            success_callback()

            emitter.on('calc_input_received', success_callback);
            emitter.on('calc_error', calc_error_callback);
        },

        async cancel() {
            emitter.off('calc_input_received', success_callback);
            emitter.off('calc_error', calc_error_callback);
        }
    })

    return new Response(customReadable, {
        // Set the headers for Server-Sent Events (SSE)
        headers: {
            Connection: 'keep-alive',
            'Content-Encoding': 'none',
            'Cache-Control': 'no-cache, no-transform',
            'Content-Type': 'text/event-stream; charset=utf-8',
        },
    })
}