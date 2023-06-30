import { Autocomplete, Box, Icon, IconButton, Input, Stack, TextField, Typography } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Table from './Table';



const Search = () => {
  const [result, setResult] = useState([]);
  const[first,setfirst]=useState("");
  const[open,setOpen]=useState(false)

  const fetchBooks = async (url) => {
    const res = await fetch(url);
    console.log(res);
    const json = await res.json();
    console.log(json);
    setResult(json.hits.hits);
  }                                                                                                     
  useEffect(() => {
    fetchBooks('/details/_search')
  }, [])
  console.log("our result is", result);

  const datas=[2018,2019,2020,2021,2022,2023,2024]
  global.values=first;

  return (
    <>
    <Box sx={{
    height:"72px",
    
    backgroundColor:"lightskyblue",
    border:"0.5px solid grey",
    
}}> 


<Stack direction={"row"} ml={10} mt={1} gap={3} >   
      

      <select name="cars" id="cars" placeholder='select Year' className='searchcontainer2' >
        <option  selected disabled>select year</option>
         
  <option  className='optionname' value="saab">2016</option>
  <option className='optionname'  value="mercedes">2017</option>
  <option className='optionname'  value="audi">2018</option>
  <option className='optionname'  value="audi">2019</option>
  <option  className='optionname' value="audi">2020</option>
 
</select>



      <datalist id="datas">
         {datas.map((op)=><option>{op}</option>)}
      </datalist>
      <Fragment>
      <Autocomplete   className="searchcontainer" disableListWrap aria-disabled
        id="users"
        defaultValue={null}
        getOptionLabel={(result) => `${result._id} ${result._source.description}`}
        options={result}
    disableCloseOnSelect
     
   
        sx={{ width: "650px" , color: "blue", backgroundColor: "lavender"  ,border:"2px solid blue" ,outline:"none",}}
        isoptionEqualToValue={(option, value) =>
          option._id === value._id
        }
        noOptionsText={"PLEASE ENTER VALID CODES"}
        popupIcon={

          <SearchIcon/>
        }
        open={open}
        onInputChange={(_, value) => {
          if (value.length === 0) {
            if (open) setOpen(false);
          } else {
            if (!open) setOpen(true);
          }
        }}
        onClose={() => setOpen(false)}
        onChange={(event, newValue) => {
          setfirst(newValue)
       }}
       autoSelect








     
       renderOption={(props, result) => (
        
          <Box  sx={{ color: "blueviolet", backgroundColor: "white" }} {...props} key={result._id}>
           {result._id} {result._source.description}
        </Box>
   
          
       )}
        renderInput={(parms) => <TextField  {...parms} placeholder='search for code' sx={{outline:"none",border:"none"
          
        }}  />}      />
     
      </Fragment>
      
    </Stack>
    
    <Table/>
    </Box>
   
    </>
  )
}

export default Search













