import React from 'react'
import styled from 'styled-components'


const Footer = () => (
    <Footers>
        <div className="footer-first">
            <div className="footer-content">
                <h1>Contacts Details</h1>
                <p>(+234, 111,234,4567)</p>
                <p>(lookup@gmail.com)</p>
                <p>(www.bibi.com.ng)</p>
            </div>
            <div className="icon-footer">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-whatsapp"></i>
                <i className="fa fa-instagram"></i>
            </div>
        </div>

        <div className="copy-right">
            <span>
                Copyright &copy; bibi.inc
            </span>
        </div>
    </Footers>
)

export default Footer


const Footers = styled.div
`
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #333;
    .footer-first{
        display: flex;
    }
    .footer-content{
        color: #eee;
        padding-top: 35px;
        padding-right: 30px;
        padding-bottom: 20px;
        text-content: left;
        p{
            text-align: center;
        }
    }
    .icon-footer{
        padding-top: 90px;
        padding-left: 30px;
        i{
            font-size: 3em;
            margin: 0 30px;
        }
        i:nth-child(1){
            color: blue;
        }
        i:nth-child(2){
            color: blue;
        }
        i:nth-child(3){
            color: green;
        }
        i:nth-child(4){
            color: gold;
        }
    }
    .copy-right{
        color: #eee;
        padding: 5px 0;
        border-top: 1px solid #bbb;
        width: 100%;
        text-align: center;
    }
`