import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const CountryCard = ({
  countryName,
  countryLink,
  countryFlag,
  countryPopulation,
  countryRegion,
  countryCapital,
  loading,
  darkMode
}) => {
  if (loading) {
    return (
      <Card sx={{ backgroundColor: darkMode ? "darkmode.primary.main" : "lightmode.primary.main", maxWidth: {lg: 265}, max: {lg: 265} }}>
        <Skeleton variant="rectangle" sx={{ height: 140 }} />
        <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
          <Skeleton sx={{marginBottom: '10px'}} variant="text" width={200} height={20}></Skeleton>
          <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
            <Typography sx={{color: darkMode ? "#ffffff90" : "#00000095", fontSize: 14}}><strong>Population: </strong></Typography>
            <Skeleton variant="text" width={50} height={20} />
          </Box>
          <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
            <Typography sx={{color: darkMode ? "#ffffff90" : "#00000095", fontSize: 14}}><strong>Region: </strong></Typography>
            <Skeleton variant="text" width={80} height={20} />
          </Box>
          <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
            <Typography sx={{color: darkMode ? "#ffffff90" : "#00000095", fontSize: 14}}><strong>Capital: </strong></Typography>
            <Skeleton variant="text" width={80} height={20} />
          </Box>
          
        </CardContent>
      </Card>
    );
  }

  return (
    <Link to={countryLink} style={{ textDecoration: "none" }}>
      <Card sx={{ textDecoration: "none", backgroundColor: darkMode ? "darkmode.primary.main" : "lightmode.primary.main", maxWidth: {lg: 265}, max: {lg: 265}, transition: '0.3s', "&:hover": {backgroundColor: "primary.hover"} }}>
        <CardMedia
          image={countryFlag}
          title={countryName}
          sx={{ height: 140 }}
        />
        <Box
          p={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 1,
            
          }}
        >
          <Typography
            variant="h7"
            sx={{
              color: darkMode ? "darkmode.primary.white" : "lightmode.primary.black",
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              // whiteSpace: 'nowrap',
            }}
          >
            <strong>{countryName}</strong>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography sx={{ color: darkMode ? "#ffffff90" : "#00000095", fontSize: 14 }}>
              <strong>Population: </strong>
              {countryPopulation}
            </Typography>
            <Typography sx={{ color: darkMode ? "#ffffff90" : "#00000095", fontSize: 14 }}>
              <strong>Region: </strong>
              {countryRegion}
            </Typography>
            <Typography sx={{ color: darkMode ? "#ffffff90" : "#00000095", fontSize: 14 }}>
              <strong>Capital: </strong>
              {countryCapital}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Link>
  );
};

export default CountryCard;
