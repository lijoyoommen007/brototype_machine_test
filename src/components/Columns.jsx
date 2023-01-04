import {format} from 'date-fns'
import { ColumnFilter } from './ColumnFilter'

export const COLUMNS1 =[
    {
        Header:"Id",
        accessor:"id",
        Footer:"Id",
        Filter:ColumnFilter
    },
    {
        Header:"First Name",
        accessor:"first_name",
        Footer:"first_name",
        Filter:ColumnFilter
    },
    {
        Header:"Last Name",
        accessor:"last_name",
        Footer:"last_name",
        Filter:ColumnFilter
    },
    {
        Header:"Email",
        accessor:"email",
        Footer:"Email",
        Filter:ColumnFilter
    },
    {
        Header:"Date of Birth",
        accessor:"date_of_birth",
        Footer:"Date of Birth",
        Cell: ({value})=>{return format(new Date(value), 'dd/MM/yyyy')},
        Filter:ColumnFilter
    },
    
    {
        Header:"Age",
        accessor:"Age",
        Footer:"Age",
        Filter:ColumnFilter
    }
]

export const COLUMNS2 =[
    {
        Header:"Id",
        accessor:"id",
        Footer:"Id",
        Filter:ColumnFilter
    },
    {
        Header:"First Name",
        accessor:"first_name",
        Footer:"first_name",
        Filter:ColumnFilter
    },
    {
        Header:"Last Name",
        accessor:"last_name",
        Footer:"last_name",
        Filter:ColumnFilter
    },
   
    {
        Header:"Email",
        accessor:"email",
        Footer:"Email",
        Filter:ColumnFilter
    },
 
]



