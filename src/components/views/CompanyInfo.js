import React from 'react'
import styled from 'styled-components'
import { List } from 'semantic-ui-react'

export const CompanyInfo = ({searchItem}) => (
    <>
        <h1 style={{padding: "10px 20%", fontSize: "4em"}}>Company Details</h1>
        <List divided relaxed style={{padding: "10px 20%"}}>
            <List.Item>
            <List.Icon name='flag' size='large' verticalAlign='middle' />
            <List.Content>
                <List.Header as='a'>Company Name</List.Header>
                <List.Description as='a' style={{padding: "10px"}}  style={{padding: "10px"}}>{searchItem.company.name}</List.Description>
            </List.Content>
            </List.Item>
            <List.Item>
            <List.Icon name='star outline' size='large' verticalAlign='middle' />
            <List.Content>
                <List.Header as='a'>Company Catch Phrase</List.Header>
                <List.Description as='a'  style={{padding: "10px"}}>{searchItem.company.catchPhrase}</List.Description>
            </List.Content>
            </List.Item>
            <List.Item>
            <List.Icon name='warehouse' size='large' verticalAlign='middle' />
            <List.Content>
                <List.Header as='a'>Company Business Type</List.Header>
                <List.Description as='a'  style={{padding: "10px"}}>{searchItem.company.bs}</List.Description>
            </List.Content>
            </List.Item>
        </List>
    </>
)
