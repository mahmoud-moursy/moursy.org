import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const bloogs = await getCollection('bloogs');
    
    return rss({
        title: "Moursy's Bloog",
        description: "I am not like the other fools.",
        site: context.site,
        items: [
            ...bloogs.map((post) => ({
                link: `/bloog/posts/${post.id}`,
                ...post.data,
            })),
            {
                title: "Apologies, RSS users!",
                content: "I tried to embed my blog post content directly in the RSS feed, but my static site generator's\n" +
                         "solution for rss REALLY SUCKS!! So I can't put any RSS content in the actual feed... sorry :(",
                pubDate: new Date('2025/03/26')
            },
        ],
        customData: `<language>en-us</language>`
    })
}