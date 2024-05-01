import { Link } from "react-router-dom";
import "./footer.scss";
import FooterList from "../footer-list/footer-list";
import { FOOTER_DATA } from "./footer-data";
import footerImg from "@/assets/imgs/footer-image.png";
import FooterCard from "../footer-card/footer-card";

export default function Footer(): React.ReactElement {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <p className="footer__top-text">
            1. Representative example based on national averages for spending in
            certain categories. Cashback can only be earned at the participating
            retailers. &nbsp;<Link to="/">Read more here —{">"}</Link>
          </p>
          <p className="footer__top-text">
            4. Subject to satisfactory ID checks.
          </p>
          <p className="footer__top-text">
            5. Open times depend on the particular PayPoint store.
          </p>
          <p className="footer__top-text">
            7. When you get paid into Pockit via BACS transfer, we can advance
            you the money at 6pm on the day before it’s due. &nbsp;
            <Link to="/">Read more here —{">"}</Link>
          </p>

          <p className="footer__top-text">
            † Sign up in app or web. 18 years and older, subject to satisfactory
            residence and ID checks. Please note your card will not be
            dispatched until you have successfully verified your account.
            Delivery time depends on the delivery method you selected during
            signup and provided as a guidance only. Actual delivery times may
            vary and depend on Royal Mail.
          </p>

          <p className="footer__top-text">
            Product images are for illustrative purposes only and may differ
            from the actual product.
          </p>

          <Link className="footer__top-link" to="/">
            Pockit promotion terms & conditions
          </Link>
          <Link className="footer__top-link" to="/">
            Do you have money worries?
          </Link>
        </div>

        <img src={footerImg} alt="footer" className="footer__img" />
        <FooterList data={FOOTER_DATA} />

        <FooterCard />

        <p className="footer__top-text">
          The Pockit Card is issued by PSI-Pay Ltd pursuant to a license by
          Mastercard® International Inc. Funds held within the Pockit account
          are issued by PSI-Pay Ltd, authorised and regulated by the Financial
          Conduct Authority of the United Kingdom under the Electronic Money
          Regulations 2011 (FRN 900011) for the issuing of electronic money.
        </p>

        <p className="footer__top-text">
          Access to payments including FPS, BACS, CHAPS and Direct Debits and
          associated electronic money accounts are provided by Modulr FS
          Limited. Pockit Limited is a distributor of Modulr FS Limited, a
          company Modulr FS Limited, a company registered in England and Wales
          with company number 09897919, which is authorised and regulated by the
          Financial Conduct Authority as an Electronic Money Institution (Firm
          Reference Number: 900573) for the issuance of electronic money and
          payment services.
        </p>

        <p className="footer__top-text">
          Whilst Electronic Money products are not covered by the Financial
          Services Compensation Scheme (FSCS) funds will be held in one or more
          segregated accounts and safeguarded in line with the Electronic Money
          Regulations 2011 – for more information please see UK Safeguarding
          Explanation.
        </p>
        <p className="footer__top-text">
          Pockit Limited (FRN 551245) is an Authorised Representative of Jove
          Technology Limited (FRN 977188). Pockit Limited is permitted to assist
          with the administration of insurance products on behalf of Jove
          Technology Limited.
        </p>
        <p className="footer__top-text">
          Pockit Limited (FRN 551245) is an Authorised Representative of
          Steadypay Limited (FRN 789333). Pockit Limited is permitted to assist
          with the administration of consumer credit products on behalf of
          Steadypay Limited.
        </p>
        <p className="footer__top-text">
          <Link to="/">UK Safeguarding Explanation</Link>
        </p>

        <span className="footer__copy">
          Copyright © 2014 - 2024 Pockit LTD
        </span>
      </div>
    </footer>
  );
}
