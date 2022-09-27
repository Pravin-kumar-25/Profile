import { makeStyles } from "@mui/styles"

export default makeStyles((theme) => ({
    paper: {
        // width: '50%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding: theme.paper.spacing[1],
        flexDirection:'column',
        rowGap:'25px'
    }
}))