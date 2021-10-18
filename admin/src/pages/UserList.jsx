import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { rows } from "../data";
import { Link } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
    flex: 4;
`;

const UserContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Image = styled.img`
    width: 30px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;

const Button = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb007;
    color: white;
    cursor: pointer;
    margin-right: 20px;
`;

const UserList = () => {

    const [data, setData] = useState(rows);

    const handleDelete = (id) => {
        setData(data.filter(item=>item.id !== id));
    }

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "user", headerName: "User", width: 200, renderCell: (params) =>{
            return(
                <UserContainer>
                    <Image src={params.row.avatar} />
                    {params.row.username}
                </UserContainer>
            )
        } },
        { field: "email", headerName: "Email", width: 200 },
        { field: "status", headerName: "Status", width: 120 },
        { field: "transaction", headerName: "Transaction", width: 160 },
        { field: "action", headerName: "Action", width: 150, renderCell: (params) => {
            return (
                <>  
                    <Link to={`/user/${params.row.id}`}>
                        <Button>Edit</Button>
                    </Link>
                    <DeleteOutline style={{color:"red", cursor:"pointer"}} onClick={()=>handleDelete(params.row.id)} />
                </>
            )
        }}
    ];

    

    return (
        <Container>
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
        </Container>
    )
}

export default UserList
