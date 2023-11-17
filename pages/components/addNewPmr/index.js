import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';
import {
  Container,
} from '@mui/material';
import Box from '@mui/material/Box';
import style from "./style.module.css"
// import Link from "next/Link"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddIcon from '@mui/icons-material/Add';
import Link from 'src/components/Link';





const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' };
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

const Badges = ()=> {
  


  return (
    <>
      <Head>
        <title>FCD-PMR</title>
      </Head>
      <Container maxWidth="lg">
        <h2 className={style.h2}>Project Monitoring Report</h2>
        <div className={style.Container}>
          <div className={style.names}>
            <h6 className={style.cm}>client name <span className={style.span}>*</span></h6>
            <h6 className={style.ps}>payment status</h6>
          </div>
             <form>
              <input className={style.input2} type="text" placeholder='enter the name' />
               <div class="test-div">
               <select className={style.input1}>
                  <option selected>select one</option>
                  <option value="1">Pending</option>
                  <option value="2">Completed</option>
                   </select>
                    <div className={style.filter}>
              
                    <button className={style.btn}>Filter  <FilterAltIcon /></button>
                    </div>
                  </div>              
             </form>
             <div className={style.addmepmr}>
             <AddIcon />
                <Link className={style.deco} href="/newpmr/newPmr">Add New PMR</Link>
             </div>
          </div>
        
      </Container>
    </>
  );



  
}

Badges.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Badges;
