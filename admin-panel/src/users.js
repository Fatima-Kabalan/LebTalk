import * as React from "react";
import { useMediaQuery } from '@mui/material';
import { List, SimpleList, Datagrid, TextField, EmailField, UrlField } from 'react-admin';

export const UserList = () => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.username}
                    tertiaryText={record => record.email}
                    sx={{ paddingRight:8 , color:'green'}}
                />
            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="id"  />
                    <TextField source="name" />
                    {/* <TextField source="username" /> */}
                    <EmailField source="email" />
                    {/* <TextField source="address.street" /> */}
                    <TextField source="phone" />
                    <TextField source="website" />
                    <UrlField source="website" />
                    <TextField source="company.name" />
                </Datagrid>
            )}
        </List>
    );
}