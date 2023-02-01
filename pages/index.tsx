import Head from 'next/head'
import styled from 'styled-components'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import Categories from '../components/Categories/Categories'



const Main = styled.div`
    
`
export default function Home() {


  return (
    <>

      <Navbar/>

      <Main>

      <Categories/>

     
    </Main>
    </>
  )
}
