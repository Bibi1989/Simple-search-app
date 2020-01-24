import React from 'react'
import styled from 'styled-components'
import { List } from 'semantic-ui-react'

export const AdditionalInfo = ({searchItem}) => (
    <>
        <h1 style={{padding: "10px 20%", fontSize: "4em"}}>Users Address</h1>
        <List divided relaxed style={{padding: "10px 20%"}}>
            <List.Item>
            <List.Icon name='address card' size='large' verticalAlign='middle' />
            <List.Content>
                <List.Header as='a'>Street</List.Header>
                <List.Description as='a' style={{padding: "10px"}}  style={{padding: "10px"}}>{searchItem.address.street}</List.Description>
            </List.Content>
            </List.Item>
            <List.Item>
            <List.Icon name='address card outline' size='large' verticalAlign='middle' />
            <List.Content>
                <List.Header as='a'>City</List.Header>
                <List.Description as='a'  style={{padding: "10px"}}>{searchItem.address.city}</List.Description>
            </List.Content>
            </List.Item>
            <List.Item>
            <List.Icon name='address book outline' size='large' verticalAlign='middle' />
            <List.Content>
                <List.Header as='a'>Zip Code</List.Header>
                <List.Description as='a'  style={{padding: "10px"}}>{searchItem.address.zipcode}</List.Description>
            </List.Content>
            </List.Item>
        </List>
    </>
)