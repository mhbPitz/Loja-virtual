import useSteamApi from "../hooks/useSteamAPI"

export default function ShowGames({link}) {
    const object = link
    const name = object.name
    const image = object.header_image

    return (
        <>
        <image src={image}></image>
        </>
    )
}