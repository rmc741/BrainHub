import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./index.css";

export function Header() {
    return(
        <AppBar position="static" sx={{display:"flex"}}>
            <Toolbar sx={{justifyContent:"space-between"}}>
                <a className="logo" href="/">
                    <img src="criatividade.png" style={{height:"40px"}} alt="Logo"/>
                    <Typography>
                        BarinHub
                    </Typography>
                </a>

                <div className="nav-bar">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                </div>
            </Toolbar>
        </AppBar>
    )
}