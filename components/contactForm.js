import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Image from "next/image";
import wesele_z_klasa from "../public/icons/wesele_z_klasa.webp";
import instagram_icon from "../public/icons/instagram_icon.webp";
import facebook_icon from "../public/icons/facebook_icon.webp";
import slub_na_glowie from "../public/icons/slub_na_glowie.webp";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const ContactForm = ({scrollToContact}) => {
  const [sender, setSender] = React.useState("");
  const [isSenderValid, setIsSenderValid] = React.useState(false);
  const [senderValidationHelper, setSenderValidationHelper] = React.useState("");
  const [isSenderDirty, setIsSenderDirty] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [emailValidationHelper, setEmailValidationHelper] = React.useState("");
  const [isEmailDirty, setIsEmailDirty] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [isMessageValid, setIsMessageValid] = React.useState(false);
  const [isMessageDirty, setIsMessageDirty] = React.useState(false);
  const [messageSent, setMessageSent] = React.useState(false);
  const [messageValidationHelper, setMessageValidationHelper] = React.useState("");

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const handleChange = (e) => {
    if (e.target.name === "sender") {
      if (isEmpty(e.target.value)) {
        setIsSenderValid(false);
        setSenderValidationHelper("Pole Twoje imię jest wymagane.");
      } else {
        setIsSenderValid(true);
        setSenderValidationHelper("");
      }
      setSender(e.target.value);
    }

    if (e.target.name === "email") {
      if (isEmpty(e.target.value)) {
        setIsEmailValid(false);
        setEmailValidationHelper("Pole Twój adres email jest wymagane.");
      } else if (!isEmail(e.target.value)) {
        setIsEmailValid(false);
        setEmailValidationHelper("Wpisaleś niepoprawny adres email.");
      } else {
        setIsEmailValid(true);
        setEmailValidationHelper("");
      }
      setEmail(e.target.value);
    }

    if (e.target.name === "message") {
      if (isEmpty(e.target.value)) {
        setIsMessageValid(false);
        setMessageValidationHelper("Pole Twoja wiadomość jest wymagane.");
      } else {
        setIsMessageValid(true);
        setMessageValidationHelper("");
      }
      setMessage(e.target.value);
    }
  };

  const handleBlur = (e) => {
    if (e.target.name === "sender") {
      setIsSenderDirty(true);
    }
    if (e.target.name === "email") {
      setIsEmailDirty(true);
    }
    if (e.target.name === "message") {
      setIsMessageDirty(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmpty(sender)) {
      setSenderValidationHelper("Pole Twoje imię jest wymagane.");
      setIsSenderDirty(true);
      return false;
    }

    if (isEmpty(email)) {
      setIsEmailValid(false);
      setEmailValidationHelper("Pole Twój adres email jest wymagane.");
      setIsEmailDirty(true);
      return false;
    } else if (!isEmail(email)) {
      setIsEmailValid(false);
      setEmailValidationHelper("Wpisaleś niepoprawny adres email.");
      setIsEmailDirty(true);
      return false;
    } else {
      setIsEmailValid(true);
      setEmailValidationHelper("");
    }

    if (isEmpty(message)) {
      setIsMessageValid(false);
      setMessageValidationHelper("Pole Twoja wiadomość jest wymagane.");
      setIsMessageDirty(true);
      return false;
    }

    let formData = {
      formSender: sender,
      formEmail: email,
      formMessage: message,
    };

    if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formMessage.length < 1) {
      return false;
    }

    var esc = encodeURIComponent;
    var query = Object.keys(formData)
      .map((k) => esc(k) + "=" + esc(formData[k]))
      .join("&");

    var sUrlWithParams = "https://moksir.dynow.pl/mtest.php" + "?" + query;
    fetch(sUrlWithParams, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    setSender("");
    setIsSenderValid(false);
    setSenderValidationHelper("");
    setIsSenderDirty(false);
    setEmail("");
    setIsEmailValid(false);
    setEmailValidationHelper("");
    setIsEmailDirty(false);
    setMessage("");
    setIsMessageValid(false);
    setMessageValidationHelper("");
    setIsEmailDirty(false);
    setMessageSent(true);
  };

  let displayFormConfirmation = "";
  let displayForm = "";

  if (messageSent) {
    displayFormConfirmation = "block";
    displayForm = "none";
  } else {
    displayFormConfirmation = "none";
    displayForm = "block";
  }

  return (
    <>
      <Box sx={{ pt: 4, pb: 4 }}>
        <Typography variant="h2" className={matches ? 'quote-title' : ''} align="center">
          KONTAKT
        </Typography>
      </Box>
      <Box sx={{ display: `${displayFormConfirmation}`, pb: 3 }}>
        <Typography variant="subtitle2" align="center">
          TWOJA WIADOMOŚĆ ZOSTAŁA WYSŁANA.
        </Typography>
        <Typography variant="subtitle2" align="center">
          DZIĘKUJĘ ZA PYTANIE. ODPOWIEM BARDZO SZYBKO.
        </Typography>
      </Box>

      <Box sx={{ display: `${displayForm}`, pb: 3 }}>
        <Typography variant="subtitle2" align="center">
          ZAINTERESOWAŁA CIĘ MOJA OFERTA, CHCESZ POZNAĆ DOSTĘPNOŚĆ TERMINU i ZAPYTAĆ O CENĘ PAKIETU?
        </Typography>
        <Typography variant="subtitle2" align="center">
          WYPEŁNIJ PROSZĘ PONIŻSZY FORMULARZ KONTAKTOWY i WYŚLIJ WIADOMOŚĆ
        </Typography>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { my: 2 }, display: `${displayForm}`
        }}
        noValidate>
        <FormControl variant="outlined" fullWidth margin="none">
          <TextField
            required
            id="sender"
            label="Twoje imię"
            name="sender"
            value={sender}
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur}
            error={isSenderDirty && isSenderValid === false}
            color={isSenderValid === true ? "success" : ""}
            helperText={isSenderDirty && senderValidationHelper}
          />

          <TextField
            required
            id="email"
            label="Twój adres e-mail"
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur}
            error={isEmailDirty && isEmailValid === false}
            color={isEmailValid === true ? "success" : ""}
            helperText={isEmailDirty && emailValidationHelper}
          />

          <TextField
            required
            id="message"
            label="Twoja wiadomość"
            name="message"
            value={message}
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur}
            error={isMessageDirty && isMessageValid === false}
            color={isMessageValid === true ? "success" : ""}
            multiline
            rows={3}
            helperText={isMessageDirty && messageValidationHelper}
          />
          <Button variant="blogButton" type="submit">
            WyŚLIJ WIADOMOŚĆ
          </Button>
        </FormControl>
      </Box>

      <Box sx={{ py: 4 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item md={6} >
            <Typography variant="subtitle2" align="center" color="text.secondary">
              TOMASZ PROKOP -{" "}
              <Link href="https://99foto.pl">
               FOTOGRAF ŚLUBNY KRAKÓW
              </Link>
            </Typography>
            <Typography variant="subtitle2" align="center" color="text.secondary">
              ul. Bociana 4A/35, 31-231 Kraków
            </Typography>
            <Typography variant="subtitle2" align="center" color="text.secondary">
              TELEFON:{" "}
              <Link href="tel:+48663275222">
                +48 663 275 222
              </Link>{" "}
              &nbsp; EMAIL:{" "}
              <Link href="mailto:tomasz@99foto.pl">
                TOMASZ@99FOTO.PL
              </Link>
            </Typography>
            <Typography variant="subtitle2" align="center" color="text.secondary">
              NIP: 8133336677 REGON: 369770278
            </Typography>
            <Typography variant="subtitle2" align="center" color="text.secondary">
              <Link href="/polityka-prywatnosci-rodo">
                POLITYKA PRYWATNOŚCI - RODO
              </Link>
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Box sx={{ p: 1 }}>
              <Typography variant="subtitle2" align="center" color="text.secondary">
                OBSERWUJ MNIE
              </Typography>
            </Box>
            <Grid container spacing={1} justifyContent="center" alignItems="center">
              <Grid item xl={4} />
              <Grid item xl={1}>
                <Link href="https://www.weselezklasa.pl/ogloszenia-weselne/tomasz-prokop-fotograf-slubny,35325/">
                    <Image alt="wesele z klasą" src={wesele_z_klasa} />
                </Link>
              </Grid>
              <Grid item xl={1}>
                <Link href="https://www.instagram.com/99foto.pl">
                    <Image alt="profil na instagramie" src={instagram_icon} />
                </Link>
              </Grid>
              <Grid item xl={1}>
                <Link href="https://facebook.com/99foto">
                    <Image alt="profil na instagramie" src={facebook_icon} />
                </Link>
              </Grid>
              <Grid item xl={1}>
                <Link href="https://www.slubnaglowie.pl/katalog/firma/tomasz-prokop_6663">
                    <Image alt="profil na instagramie" src={slub_na_glowie} />
                </Link>                
              </Grid>
              <Grid item xl={4} />
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 4 }}>
        Najczęściej fotografuję w <Link href="/fotograf-slubny-malopolska">województwie małopolskim</Link>: <Link href="/reportaz-slubny-krakow">Kraków</Link>, <Link href="/fotograf-slubny-bochnia">Bochnia</Link>, <Link href="/fotograf-slubny-chrzanow">Chrzanów</Link>, <Link href="/fotograf-slubny-kielce">Kielce</Link>, <Link href="/fotograf-slubny-miechow">Miechów</Link>, <Link href="/fotograf-slubny-myslenice">Myślenice</Link>, <Link href="/fotograf-slubny-olkusz">Olkusz</Link>, <Link href="/fotograf-slubny-oswiecim">Oświęcim</Link>, <br/><Link href="/fotograf-slubny-wieliczka">Wieliczka</Link>, <Link href="/fotograf-slubny-tarnow">Tarnów</Link> i <Link href="/fotograf-slubny-wadowice">Wadowice</Link>, w <Link href="/fotograf-slubny-slask">województwie śląskim</Link>: <Link href="/fotograf-slubny-katowice">Katowice</Link> i w górach: <Link href="/fotograf-slubny-zakopane">Zakopane</Link>, <Link href="/fotograf-slubny-szczawnica">Szczawnica</Link> i <Link href="/fotograf-slubny-szczyrk">Szczyrk</Link>.
      </Typography>
    </>
  );
};

export default ContactForm;