import igcraper from 'igcraper'
/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async (req, res) => {
    const { url } = req.query
    if (!url) {
        res.status(400).json({
            error: "url not provided"
        })
    }
    try {
        const IgCraper = new igcraper()
        // const post = await IgCraper.getPost(url)
        const reqwest = await fetch(url + "?__a=1&__d=dis", {
            headers: {
                "cookie": process.env.COOKIE,
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36", "x-ig-app-id": "936619743392459"
            }
        })

        const post = await reqwest.json()
        // const filtered = filterPost(post)
        const filtered = IgCraper.filterPost(post)
        res.json(filtered)
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}

function filterPost(post) {
    let data = post.items[0]
    let posts = []

    if (data.product_type === "carousel_container") {
        data.carousel_media.forEach((media) => {
            posts.push({
                src: media.video_versions ? media.video_versions[0].url : media.image_versions2.candidates[0].url,
                isVideo: media.video_versions ? true : false
            })
        })
    }

    if (data.product_type === "feed" || data.product_type === "igtv" || data.product_type === "clips") {
        posts.push({
            src: data.product_type === "feed" ? data.image_versions2.candidates[0].url : data.video_versions[0].url,
            isVideo: data.product_type !== "feed"
        })
    }

    return {
        dataArray: posts,
        likes: data.like_count,
        caption: data.caption.text
    }
}
