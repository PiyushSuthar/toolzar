/**
 * @param {string}url
 * @returns {Promise<import('igcraper/dist/utils/filtre/index').FilteredData>}
 */
export const getInstagramData = async (url) => {
    const data = await fetch(`/api/instagram?url=${url}`).then(res => res.json())
    return data
}