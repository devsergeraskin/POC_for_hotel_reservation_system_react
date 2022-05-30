import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


type Props = { 
  tags: Array<string>,
  onChange:(key:string, value:any) => void,
  objectKey:string
}

const DeletableChips: React.FC<Props> = ({ tags, onChange, objectKey }) => {

  const handleDelete = (deletedTag:string) => () => {
    const filtred = tags.filter((tag) => {return tag !== deletedTag});
    onChange(objectKey,filtred)
  };

  return (
    <div>
      <label>Tags</label>
      <Stack direction="row" spacing={1}>
        {
         tags.length?tags.map((tag) => {
           return  (
            <Chip key={tag} label={tag} onDelete={ handleDelete(tag)} />
           )
          }):<h5>NO TAGS</h5>
        }
      </Stack>
    </div>
  
  );
}
export default DeletableChips;