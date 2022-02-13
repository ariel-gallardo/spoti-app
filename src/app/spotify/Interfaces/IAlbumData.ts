interface Images{
    url : string
}

interface Artist{
    name : string
}

export interface IAlbumResumeData{
    artists : Artist[],
    images : Images[],
    name : string    
}

export default interface IAlbumData{
    albums:{
        items : IAlbumResumeData[]
    }
}