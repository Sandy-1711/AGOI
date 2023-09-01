import '../../styles/Footer/Footer.css'
import '../../styles/Footer/Footer800.css'
export default function Footer() {
    return (<div className="footer">
        <div className="footerTop">
            <div className="footerLogo">
                <img src="/Agoi white 1.png" alt="Agoi" />
                <div className="social">
                    <img src="/twitter.svg" />
                    <img src="/fb.svg" />
                    <img src="/insta.svg" />
                </div>
            </div>
            <div className="footerLinks">
                <ul>
                    <h1>Company</h1>
                    <li><a>Institution</a></li>
                    <li><a>Retails</a></li>
                    <li><a>Care</a></li>
                    <li><a>FAQs</a></li>
                    <li><a>News</a></li>
                </ul>
                <ul>
                    <h1>Legal</h1>
                    <li><a>Privacy Policy</a></li>
                    <li><a>Terms and Use</a></li>
                    <li><a>Declaration of Risk</a></li>
                </ul>
            </div>
        </div>
        <div className="social social800">
                    <img src="/twitter.svg" />
                    <img src="/fb.svg" />
                    <img src="/insta.svg" />
                </div>
        <div className="copyright">
            All trademarks and logos or registered trademarks and logos found on this Site or mentioned herein belong to their respective owners and are solely used for informational and educational purposes.
            <br />
            <br />
            The material presented in this advertisement is for informational purposes only and should not be construed as investment advice or investment availability. It is not a recommendation of or an offer to sell or solicitation of an offer to buy any particular unlisted share, security, strategy, or investment product. Investing in the private market and securities involves risks, including the potential loss of money, and past performance does not guarantee future results. Market trends, data interpretations, graph projections are provided for informational and illustrative purposes and may not reflect actual future performance. Nothing on this website should be construed as personalized investment advice or should not be treated as legal, financial, or any other form of advice. Precize is not liable for financial or any other form of loss incurred by the user or any affiliated party based on information provided herein.
            <br />
            <br />
            Precize is neither a stock exchange nor does it intend to get recognized as a stock exchange under the Securities Contracts Regulation Act, 1956. Precis is not authorized by the capital markets regulator to solicit investments. The securities traded on these platforms are not traded on any regulated exchange
            <br />
            <br />
            The website will be updated regularly.
            <br />
            <br />
            <span>
                Copyright © 2023-Precia-All Rights Reserved
            </span>
        </div>
        {window.innerWidth<=800 && <div className='logo800'>
            <img src="/Agoi white 1.png" alt="Agoi" />
        </div>}
        <div className='copytext'>
            <span>Copyright © 2023-Precia-All Rights Reserved</span>
        </div>
    </div>)
}