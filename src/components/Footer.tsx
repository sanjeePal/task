import * as React from 'react';
import { CssBaseline, Box, Typography, Container, Link, Button, Backdrop, Modal, Fade, Grid } from '@mui/material'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Sanjeev pal technologies
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter({credit, setCredit}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          { localStorage.getItem('data') ? <DataTable credit={credit} setCredit={setCredit} /> : 'Login to play'}
          
        </Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            More info can be found here.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}



const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Ist', headerName: 'Slot 1', width: 130 },
  { field: 'IInd', headerName: 'Slot 2', width: 130 },
  { field: 'IIIrd', headerName: 'Slot 3', width: 130 },
  { field: 'time', headerName: 'Time', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.getValue(params.id, 'firstName') || ''} ${
//         params.getValue(params.id, 'lastName') || ''
//       }`,
//   },
];
let symbol = ['♧']
const rows = [
  { id: 1, slot1: 'null', slot2: 'null', slot3: 'null', time: 'NA' },
];

export function DataTable({credit, setCredit}) {

  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([])
  const [newData, setNewData] = React.useState([])

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleReset = () => {
    localStorage.removeItem('result')
    window.location.reload()
  }

  console.log(data)
  return (
    <div style={{ height: 400, width: '100%' }}>
      {data?.length > 0 ? 
      <DataGrid
      rows={data}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      checkboxSelection
    />
    :
    null
    } 
      

      <Button onClick={handleOpen} variant="contained">Click to play</Button>
      <Button style={{marginLeft: '20px'}} onClick={handleReset} variant="contained">Reset Table</Button>
      <TransitionsModal setData={setData} credit={credit} setCredit={setCredit} open={open} handleClose={handleClose} />
    </div>
  );
}






const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
};

const gridItemStyle={
      border: '1px solid black'
}

export function TransitionsModal({open, handleClose , credit, setCredit, setData}) {
  const [indexState, setIndexState] = React.useState({ id: Math.random(), Ist: 0, IInd: 0, IIIrd: 0, time: new Date().toLocaleTimeString() })
  // const [credit, setCredit] = React.useState(parseInt(JSON.parse(localStorage.getItem('data')).credit))
  const isInitialMount = React.useRef(true);
  const [flag, setFlag] = React.useState(false)
  const [result, setResult] = React.useState([])
  // let data = JSON.parse(localStorage.getItem('data'))
  // console.log(parseInt(data.credit))
  // localStorage.setItem('data', ...localStorage.getItem('data'))
  const matches = [
    
    '❤️',
    '♤',
    '♧',
    '♦'
   
  ]

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


  function checkPatternMatch() {

    if(indexState.Ist === indexState.IInd && indexState.Ist!==indexState.IIIrd)  {
      console.log('two matches')
      setCredit(credit + 0.5)
      // console.log({...data, credit: `${parseInt(data.credit) + 0.5}$`})
      
    }
    else if(indexState.Ist === indexState.IIIrd && indexState.Ist !== indexState.IInd) {
        console.log('two matches')
        setCredit(credit + 0.5)
        // localStorage.setItem('data', JSON.stringify({...data, credit: `${parseInt(data.credit) + 0.5}$`}))
    }
    // else if(indexState.IInd === indexState.Ist && indexState.IInd !== indexState.IIIrd ) {
    //   console.log('two matches')
    //   setCredit(credit + 0.5)
    // }
    else if(indexState.IInd === indexState.IIIrd && indexState.IInd !== indexState.Ist ) {
      setCredit(credit + 0.5)
      console.log('two matches')
      // localStorage.setItem('data', JSON.stringify({...data, credit: `${parseInt(data.credit) + 0.5}$`}))
  }

    else if(indexState.Ist === indexState.IInd && indexState.Ist === indexState.IIIrd && 
      indexState.Ist !== '♤' && indexState.IInd !=='♤' && indexState.IIIrd !=='♤') {
      console.log('whurrraaayy')
      setCredit(credit + 2)
    }

    else if(indexState.Ist === '♤' && indexState.IInd === '♤' && indexState.IIIrd === '♤') {
      console.log('jackpot')
      setCredit(credit + 5)
    }
    
    else {
      console.log('no match')
    }
  

  }

  console.log(indexState,credit)
  
  React.useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
   } else {
    checkPatternMatch()
    saveResult()
    
   }
        
  },[indexState])

  const saveResult = async  () => {
        setResult([...result, indexState])
        localStorage.setItem('result', JSON.stringify( [...result, indexState] ))
  }
  localStorage.setItem('credit', JSON.stringify({credit: credit}))
 
  React.useEffect(() => {
    if(JSON.parse(localStorage.getItem('result'))) {
      setResult(JSON.parse(localStorage.getItem('result')))
      
    }
  },[])
  
  React.useEffect(() => {
    setData(JSON.parse(localStorage.getItem('result')))
  },[result])
  

  const handleSpin = async () => {
    if(credit < 2) {
     return alert('your are out of credit, please reload your page to fill up the balance ')
    }
    setIndexState({...indexState, id: Math.random(), Ist: matches[getRandomInt(0,3)], IInd: matches[getRandomInt(0,3)], IIIrd: matches[getRandomInt(0,3)], 
      time: new Date().toLocaleTimeString() })
    setCredit(credit - 2)
  }

  console.log(result)

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Woohoooo lets play
            </Typography>
              <Grid container>
                <Grid item md={2} sx={gridItemStyle}>
                  {indexState.Ist}
                </Grid>
                <Grid item md={2} sx={gridItemStyle}>
                  {indexState.IInd}
                </Grid>
                <Grid item md={2} sx={gridItemStyle}>
                  {indexState.IIIrd}
                </Grid>
              </Grid>
              <Grid container>
              <Button onClick={handleSpin} variant="outlined">spin</Button>
              <Button onClick={handleClose} variant="outlined">close</Button>
              </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
