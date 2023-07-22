import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../CSS/footer.css"

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div class="footer-content">
            <footer>
                <h3>Foolish Developer</h3>
                <p>Foolish Developer —  source code.</p>
                <ul class="socials">
                    <li><FacebookIcon /></li>
                    <li><TwitterIcon /></li>
                    <li><GoogleIcon /></li>
                    <li><YouTubeIcon /></li>
                    <li><LinkedInIcon /></li>
                </ul>
                <p>Copyright ⓒ {year}</p>
            </footer>
        </div>
    );
}

export default Footer;