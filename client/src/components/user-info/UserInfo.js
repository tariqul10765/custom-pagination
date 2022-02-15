import React, { useEffect, useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton } from '@mui/material';
import './UserInfo.css'

function UserInfo() {
    // states
    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [limit, setLimit] = useState(5)
    const [numberOfUser, setNumberOfUser] = useState(null)
    const [numberOfPages, setNumberOfPages] = useState(null);


    useEffect(() => {
        const url = `http://localhost:4000/api/user/get-user?page=${currentPage}&&limit=${limit}`

        fetch(url)
            .then(res => res.json())
            .then(json => {
                if (currentPage > json.page) setCurrentPage(json.page);
                setUsers(json.data)
                setNumberOfPages(json.numberOfPages)
                setNumberOfUser(json.numOfResults)
            })
    }, [currentPage, limit])

    return (
        <div>
            {/* @@@@@@@@@ table data @@@@@@@@@@ */}
            <div className='table_scroll'>
                <table>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email Address</th>
                        </tr>
                    </thead>
                    {
                        users.map((user, index) =>
                            <tr key={index}>
                                <td>{user.fullName}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    }
                </table>
            </div>

            {/* @@@@@@@@@ pagination @@@@@@@@@@ */}
            <div className='pagination'>
                <div className='rows'>
                    <p>Rows per page:</p>
                    <select
                        name="limit"
                        className="limit"
                        onChange={e => setLimit(Number(e.target.value))}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>

                <div className='increase_decrease_btn'>
                    <p>
                        {((currentPage - 1) * limit) + 1} - {((currentPage - 1) * limit) + limit > numberOfUser ? numberOfUser : ((currentPage - 1) * limit) + limit} of {numberOfUser}
                    </p>

                    <IconButton
                        color="primary"
                        onClick={() => {
                            currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(currentPage)
                        }}>
                        <KeyboardArrowLeftIcon />
                    </IconButton>
                    <IconButton
                        color="primary"
                        onClick={() => {
                            currentPage < numberOfPages ? setCurrentPage(currentPage + 1) : setCurrentPage(currentPage)
                        }}>
                        <ChevronRightIcon />
                    </IconButton>
                </div>

            </div>
        </div>
    )
}

export default UserInfo
