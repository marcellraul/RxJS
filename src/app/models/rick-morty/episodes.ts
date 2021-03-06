export interface episodes {
    id: number,//	int	The id of the episode.
    name: string,//	The name of the episode.
    air_date: string,//	The air date of the episode.
    episode: string,//	The code of the episode.
    characters: Array<any>,//	List of characters who have been seen in the episode.
    url: string,//	Link to the episode's own endpoint.
    created: string
}