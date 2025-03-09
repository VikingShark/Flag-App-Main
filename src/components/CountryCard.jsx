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
}) => {
  if (loading) {
    return (
      <Card>
        <Skeleton variant="rectangle" sx={{ height: 140 }} />
        <CardContent>
          <Skeleton variant="text" width={150} height={20} />
          <Skeleton variant="text" width={150} height={20} />
          <Skeleton variant="text" width={150} height={20} />
          <Skeleton variant="text" width={150} height={20} />
        </CardContent>
      </Card>
    );
  }

  return (
    <Link to={countryLink} style={{ textDecoration: "none" }}>
      <Card sx={{ textDecoration: "none", backgroundColor: "primary.main", maxWidth: {lg: 265}, max: {lg: 265}, transition: '0.3s', "&:hover": {backgroundColor: "#ffffff20"} }}>
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
              color: "primary.white",
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
            <Typography sx={{ color: "#ffffff90", fontSize: 14 }}>
              <strong>Population: </strong>
              {countryPopulation}
            </Typography>
            <Typography sx={{ color: "#ffffff90", fontSize: 14 }}>
              <strong>Region: </strong>
              {countryRegion}
            </Typography>
            <Typography sx={{ color: "#ffffff90", fontSize: 14 }}>
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
