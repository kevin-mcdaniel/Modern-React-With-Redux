
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

function AlbumsListItem({ album }){
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
        //removeAlbum({album, user}) we could include the user if album already didn't have it. not the best solution
        
    }

    const header= (
        <>
            <Button className="mr-2" loading={results.isLoading} onClick={handleRemoveAlbum} ><GoTrash /></Button>
            <div>{album.title}</div>
        </>
    );
   
    return (
        <ExpandablePanel key={album.id} header={header} >
            <PhotosList album={album} />
        </ExpandablePanel>
    );
}

export default AlbumsListItem;