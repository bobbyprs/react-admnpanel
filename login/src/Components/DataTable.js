import React ,{useState,useEffect}from 'react'
import { forwardRef } from 'react';
import MaterialTable from 'material-table'
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import { ListItemText, MenuItem } from '@material-ui/core';
import { CheckBox } from '@material-ui/icons';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { APIService } from '../APIService';
import {useCookies} from 'react-cookie'
import {Link} from 'react-router-dom'
import {Cookies} from 'js-cookie'



function DataTable({users,insertedInformation,updatedInformation,deletedInformations}) {
 
    const[addData,setAddData] =useState()
    const[update,setUpdate] = useState()
    const[deleted,setDeleted] = useState()
    const [csrftoken ,setcsrftoken,] = useState()

    const superuser =localStorage.getItem('super_user')
    const profilename = localStorage.getItem('userId')
    
    const [username,setUsername] = useState()
    const [email,setEmail] = useState()
    const [phone_number,setPhonenumber] = useState()
    const [is_staff,setIs_staff] = useState()
    const [ is_active,setIs_active] = useState()
    const[field,setField]  = useState([])
    const[min,setMin] = useState('')
    const[max,setMax] = useState('')
    const[disease,setDisease] = useState()
    const[studydata,setStudydata] = useState({})
    const [token] = useCookies(['mytoken'])
    const [click,setClick] = useState(false)
    const[userHist,setUserHist] = useState([])

    console.log(phone_number)
   
    console.log(token)
    console.log(username)
    if(disease){
        var names=disease.split(' ')
    }
  
  
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
      },
    };
    

    const fieldsets =[

       'NCTId','Condition','ArmGroupDescription',
       'InterventionType','BriefTitle',
       'OrgFullName','OfficialTitle',
       'BriefSummary','ReferencePMID',
       'SecondaryOutcomeMeasure',
       'PrimaryOutcomeMeasure',
       'EligibilityCriteria',
       'DetailedDescription',
       'Phase',
       'ArmGroupType',
       'ArmGroupInterventionName',
       'InterventionDescription','OverallStatus',
       'StudyType','LastUpdatePostDate'

    ]
    

    const columns=[
        {
            title:'ID',field:'id',editable:false
        },
        {
            title:'UserName',field:'username'
        },
        {
            title:'Email',field:'email'
        },
        {
            title:'PhoneNumber',field:'phone_number'
        },
        {
            title:'Active Status ',field:'is_active'
        },
        {
            title:'Staff Status',field:'is_staff'
        },
    ]
    const recent =[
        {
            title:'ID',field:'id',editable:false
        },
        {
            title:'Disease',field:'disease',
        },
        {
            title:'MinRank',field:'minrank',
        },
        {
            title:'MaxRank',field:'maxrank',
        },
        {
            title:'Url',field:'url',
        },

    ]

    console.log(users)

    function getStyles(name, personName, theme) {
        return {
          fontWeight:
            personName.indexOf(name) === -1
              ? theme.typography.fontWeightRegular
              : theme.typography.fontWeightMedium,
        };
      }

        const handleChange=(evt)=>{
            setField(evt.target.value)
        }
        

        // useEffect(() => {
        //     if(!csrftoken){
        //         return fetch('http://127.0.0.1:8000/csftoken/',{
        //             'method':'get',
        //             headers:{
        //                 'Content-Type':'application/json',
        //             },
        //         })
                
        
        //    .then(res => setcsrftoken(Cookies.get('csrftoken')))
        //    .catch(error =>console.error(error))
        //     }

        // }, [csrftoken])

   

      async function handleClick(evt){  
            evt.preventDefault()
      var duplicat=newVar && newVar.find((data) =>{
           return data.disease == disease && data.minrank == min && data.maxrank == max
         })  
         console.log(duplicat)
          if(duplicat){
              alert(`spefice details already exists in our database plaese check id ${duplicat.id}`)
          }
            return fetch('http://127.0.0.1:8000/json/',{
                'method':'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    "Authorization": `Token ${token['mytoken']}`,
                    // "X-CSRFToken":'OSafKcCjkTaACXPPBOiY2WGITTbnPCzrR7KkaiNIeQBIRMlUREunRGSvYTzSJLS6'
                },
                body: JSON.stringify({"minrank":min,"maxrank":max,"disease":disease})
            })
    
           .then(res => res.json())
           .then((res )=>{
            
            if(res.error == "Every Field is Required"){
                alert('please re enter the fields')
            }
                setStudydata(res), setClick(true)
           }
           )
           .catch(error =>console.error(error))
         }
     console.log(studydata)

        const useStyles = makeStyles((theme) => ({
            root: {
              '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
              },
            },
          }));
          
          const classes = useStyles();

         const mins=1
         const maxs=1000
         const api1 ='Lung'
         const api2 = 'cancer'
         const arr=[]
        var v=''
          
            for(var i=0;i<field.length;i++){

                arr.push(field[i])
                
            }
            for(var i=0;i<field.length;i++){
              if(i==0){
                  arr[i] = ''+arr[i]
              }
              else{
                  arr[i] = '%2C'+arr[i]
              }
              for(var i=0;i<arr.length;i++){
                v+=arr[i]
            }
            console.log(v)
  
          }
        useEffect(async () => {
            try {
                const res = await fetch('http://127.0.0.1:8000/json/', {
                    'method': 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        "Authorization": `Token ${token['mytoken']}`,
                    },
                });
                const res_1 = await res.json();
                console.log(res_1)
                return setUserHist(res_1);
            } catch (error) {
                return console.error(error);
            }
        }, [])
          
                
          const staffColumns =[]
          if(studydata){
            for(i=0;i<field.length;i++){
                staffColumns.push({'title':field[i],'field':field[i]})
            }
          }
      console.log(profilename)
          const newVar=userHist && userHist.filter((data)=>
                        data.name == 'kumar' 
                    )
          console.log(newVar)
    console.log(studydata)
    const studyApi=`https://clinicaltrials.gov/api/query/study_fields?expr=${names ?names[0]:api1}+${names ? names[1]:api2}&fields=${v}&min_rnk=${min ?min:mins}&max_rnk=${max ?max:maxs}&fmt=json`
        
    console.log(studyApi)
    
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
      };
      
    return (
        <div>
            {superuser == 'true'  ?
       
            <MaterialTable icons={tableIcons}
                title="User Table"
                data ={users}
                columns={columns}
                options={{
                    exportButton: true,
                    actionsColumnIndex:-1,
                    ViewColumn:true
                
                  }}

                  detailPanel={rowData => {
                    const newVar=userHist && userHist.filter((data)=>
                        data.name == rowData.username
                    )
                    console.log(newVar)
                    const columnss=[
                        {
                            title:'ID',field:'id',editable:false
                        },
            
                        {
                            title:'MinRank',field:'minrank'
                        },
                        {
                            title:'MaxRank ',field:'maxrank'
                        },
                        {
                            title:'disease',field:'disease'
                        },
                        {
                            title:'Url',field:'url'
                        },
                    ]
                    return (
                        <div className='cointainer' style={{marginTop:'20px',marginBottom:'20px'}}>
                     <div className='content'style={{backgroundColor:'gary', maxWidth:'90%',padding:'auto',margin:'auto',position:''}}>
                        <MaterialTable icons={tableIcons}
                        title="User History"
                        data ={newVar}
                        columns={columnss}
                        options={{
                            exportButton: true,
                            actionsColumnIndex:-1,
                            ViewColumn:true
                    }}/>
                     </div>
                     </div>
                    )
                  }}
                  onRowClick={(event, rowData, togglePanel) => togglePanel()}

                editable={{
                    onRowAdd:(addRow) =>
                    new Promise((resolve,reject)=>{
                        
                            console.log(addRow)
                        setUsername(addRow.username),setEmail(addRow.email),
                        setPhonenumber(addRow.phone_number),setIs_staff(addRow.is_staff),setIs_active(addRow.is_active)
                        setTimeout(()=>{
                            APIService.InsertUser({'username':addRow.username,'email':addRow.email,'phone_number':addRow.phone_number,'is_active':addRow.is_active,'is_staff':is_staff} ,token['mytoken'])
                            insertedInformation(addRow)
                        },2000)
                        resolve()
                    })
                    // .then((addRow) =>  APIService.InsertUser({username,email,phone_number,is_active,is_staff} ,token['mytoken'])
                    //  ).then(res => insertedInformation(res))
                    //  .then(res => console.log(res))
                    ,

                    onRowUpdate:(newData,oldData)=>
                        new Promise((resolve,reject)=>{
                            const index=oldData.tableData.id;
                            setTimeout(()=>{
                               
                                APIService.UpdateArticle(oldData.id,{'username':newData.username,'email':newData.email,'phone_number':newData.phone_number,'is_active':newData.is_active,'is_staff':newData.is_staff} ,token['mytoken'])
                                
                            },2000)
                            updatedInformation(newData,index)
                           resolve()
                        }),

                    onRowDelete:oldData =>
                        new Promise((resolve,reject)=>{
                            APIService.DeleteArticle(oldData.id,token['mytoken']) 
                            deletedInformations(oldData)
                           resolve()
                        })
                }}
            />:
            <div className='cointainer'>
                 <div className='cointainer'>
               
         
                
              <TextField required id="standard-required" label="DiseaseName" placeholder='enter the disease name' defaultValue='Lung cancer' onChange={evt =>setDisease(evt.target.value)}/> <br/>          
            
              <TextField
                id="standard-number"
                defaultValue='1'
                label="Min Pages"
                type="number"
                
                onChange={e =>setMin(e.target.value)}
            /><br/>
        <TextField
          id="standard-number"
          label="Max Pages"
          defaultValue='1000'
          type="number"
          onChange={e =>setMax(e.target.value)}
        /><br/><br/>
        

            <Button
                variant="contained"
                color="primary"
                type='submit'
                className={classes.button}
                onClick={handleClick}
            >       
            Send
            </Button><br/><br/>
        
            {click ? <Button href={studydata.filelink}>download File ..</Button>:''}<br/><br/>
            
            <MaterialTable icons={tableIcons}
                title="User Table"
                data ={newVar}
                columns={recent}
                options={{
                    exportButton: true,
                    actionsColumnIndex:-1,
                    ViewColumn:true
                
                  }}/>

            </div>   
            </div>
        }
        </div>
    )
}

export default DataTable


























{/* <InputLabel id="demo-mutiple-checkbox-label">Select</InputLabel>
            <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={field}
                onChange={handleChange}
                input={<Input />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
                style={{marginBottom:'20px',width:'150px',marginRight:'20px'}}
                >
                    {fieldsets.map((name)=>(
                        <MenuItem key={name} value={name}>
                            {/* <CheckBox checked={field.indexOf(name)>-1}/> */}
                            {/* <ListItemText primary={name}/>
                        </MenuItem>
                    ))}
              </Select> */} 