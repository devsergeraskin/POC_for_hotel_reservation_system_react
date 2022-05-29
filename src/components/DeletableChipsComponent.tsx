import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


type Props = { tags: Array<string>};
const DeletableChips: React.FC<Props> = (props) => {
  const { tags } = props;
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };


  return (
    <div>
      <label>Tags</label>
      <Stack direction="row" spacing={1}>
        {
          tags.map((tag) => {
           return  <Chip key={tag} label={tag} onDelete={handleDelete} />
          })
        }
      </Stack>
    </div>
  
  );
}
export default DeletableChips;