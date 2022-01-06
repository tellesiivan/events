import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

export default function SkeletonMain() {
  return (
    <Grid container spacing={2} justifyContent="space-between" className="dash">
      <Grid item md={8} xs={12}>
        <Stack spacing={1}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={318}
            animation="wave"
          />
          <Typography variant="h3" width={400}>
            <Skeleton />
          </Typography>
          <Skeleton variant="text" width={300} />
          <Skeleton variant="text" width={700} />
          <Skeleton variant="rectangular" width="100%" height={418} />
        </Stack>
      </Grid>
      <Grid item md={4} xs={12}>
        <Stack spacing={1}>
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
          <Skeleton variant="text" width={100} />
          <Skeleton variant="text" />
          <Skeleton variant="rectangular" width="100%" height={118} />
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
          <Skeleton variant="text" width={100} />
          <Skeleton variant="text" />
          <Skeleton variant="rectangular" width="100%" height={118} />
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
          <Skeleton variant="text" width={100} />
          <Skeleton variant="text" />
          <Skeleton variant="rectangular" width="100%" height={118} />
        </Stack>
      </Grid>
    </Grid>
  );
}
