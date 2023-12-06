import React,{useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import  Modal  from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios, { Axios } from "axios";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import cors from "cors";


const Crud=()=>{

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [name,setName]=useState('')
    const [age,setage]=useState('')
    const[editid,seteditid]=useState('')
    const [editname,seteditName]=useState('')
    const [editage,seteditage]=useState('')
    const handleclose =()=> {
        setShow(false);
    }
    const empdata=[
        {
            id:1,
            name:'swati',
            age:30
            },
            {
                id:2,
                name:'smita',
                age:30
             },


    ]
    const[data,setdata]=useState([]);

    useEffect(()=>{
setdata(getdata);

    },[])


    const getdata=()=>{

        axios.get('https://localhost:7211/api/Employee')
        .then((result)=>{
            setdata(result.data)
        }).catch((error)=>{
    
            console.log(error)
        })
    }

    const handleedit=(id)=>{
        // alert(id);
        handleShow();
        
        axios.get(`https://localhost:7211/api/Employee/${id}`)
                   
        .then((result)=>{
            seteditName(result.data.name);
            seteditage(result.data.age);
            seteditid(id);
        })
        .catch((error)=>{
            toast.error(error);
        })
        
            }
        

            const handledelete=(id)=>{

                if(window.confirm("Are you sure to Delete this Employee")==true)
                {
                  
                    axios.delete(`https://localhost:7211/api/Employee/${id}`)
                   
                    .then((result)=>{
                        if(result.status===200)
                        {
                            toast.success('Employee has been deleted');
                            getdata();
                        }
                    })
                    .catch((error)=>{
                        toast.error(error);
                    })
                    //alert(id);
                }
             
                
                    }
            const handleUpdate=()=>{
                const url=`https://localhost:7211/api/Employee/${editid}`
                const data={
                    "ID":editid,
                    "Name":editname,
                    "Age":editage
                }

                axios.put(url, data)
                    .then((result)=>
                    {
                        getdata();
                        clear();
                    }
                    )

            }

            const handlesave=()=>{
                const url='https://localhost:7211/api/Employee';
                
                const data={
                    
                    "Name":name,
                    "Age":age
                }
                axios.post(url,data)
                .then((result)=>{
                getdata();
               clear();
                toast.success('Employee has been added');
                })

            }
            const clear =()=>{
                setName('');
                setage('');
                seteditName('');
                seteditage('');
                seteditid('');
            }

    return(
        
        <div>
 &nbsp;
 &nbsp;
<ToastContainer/>
            <Container>
                <Row>
                    <Col>
                    
                    <input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </Col>
                
                &nbsp;
                <Col>
                    <input type="text" className="form-control" placeholder="Enter Age" value={age} onChange={(e)=>setage(e.target.value)} />
                    </Col>
                </Row>
                &nbsp;
                <Col>
                <button className="btn btn-primary" onClick={()=>handlesave()}>Submit</button>
                </Col>
            </Container>
            &nbsp;

<Table striped bordered hover>
<thead>
    <tr>
        <th>SL.NO</th>
        <th>Name</th>
        <th>Age</th>
        <th>Action</th>
    </tr>
</thead>
<tbody>
    {
        data && data.length>0?
        data.map((item,index)=>{
            return(
                
                <tr key={index}>
                <td>{index+1}</td>
            {/* <td>{item.id}</td> */}
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td colSpan={2}>
        <button className="btn  btn-primary" onClick={()=>handleedit(item.id)}>Edit</button>&nbsp;
        <button className="btn  btn-danger" onClick={()=>handledelete(item.id)}>Delete</button>

        {/* onClick={()=>handleedit(item.id)}
        onClick={()=>handledelete(item.id)} */}
    </td>
</tr>
            )
        })
        :
        "Loading...."
    }


</tbody>

</Table>
<Modal  show={show}   onHide={handleclose}>
<Modal.Header closeButton>
    <Modal.Title>Update</Modal.Title>

</Modal.Header>
<Modal.Body>
<Row>
                    
                    <input type="text" className="form-control" placeholder="Enter Name" value={editname} onChange={(e)=>seteditName(e.target.value)}/>
                    
                </Row>
                &nbsp;
                <Row>
                    <input type="text" className="form-control" placeholder="Enter Age" value={editage} onChange={(e)=>seteditage(e.target.value)} />
                    
                </Row>
                &nbsp;
                {/* <Col>
                <button className="btn btn-primary" onClick={()=>handlesave()}>Submit</button>
                </Col> */}

</Modal.Body>
<Modal.Footer>
    <Button variant="secondary" onClick={handleclose} >Close</Button>

    <Button variant="primary" onClick={handleUpdate}>Save Changes</Button>
</Modal.Footer>

</Modal>

        </div>
    )
}

export default Crud;