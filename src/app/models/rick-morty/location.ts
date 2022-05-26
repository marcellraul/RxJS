export interface location {
    id: number,//	int	The id of the location.
    name: string,//	The name of the location.
    type: string,//	The type of the location.
    dimension: string,//	The dimension in which the location is located.
    residents: Array<any>,//	List of character who have been last seen in the location.
    url: string,//	Link to the location's own endpoint.
    created: string
}