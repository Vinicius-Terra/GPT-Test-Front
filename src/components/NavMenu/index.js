import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home"
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 80, height: 300, borderRadius: '20px'}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {setValue(newValue);}}
        sx={{
          backgroundColor: 'black',
          flexDirection: 'column',
          alignContent: 'center',
          height: 300,
          borderRadius: '20px' 
        }}
      >
        <BottomNavigationAction icon={<HomeIcon style={{ color: 'white', fontSize: 30 }}/>} />
        <BottomNavigationAction icon={<BarChartIcon style={{ color: 'white', fontSize: 30 }} /> } />
        <BottomNavigationAction icon={<SettingsIcon style={{ color: 'white', fontSize: 30 }} />} />
      </BottomNavigation>
    </Box>
  );
}
