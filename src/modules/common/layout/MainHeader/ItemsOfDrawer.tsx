import React, { FC } from 'react'
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material'

type ItemsOfDrawerPropsType = {
  handleDrawerToggle: () => void
}

const navItems = ['Home', 'About', 'Contact']
const ItemsOfDrawer: FC<ItemsOfDrawerPropsType> = ({ handleDrawerToggle }) => {
  const theme = useTheme()

  console.log(theme.palette.text.primary)

  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List color={theme.palette.text.primary}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default ItemsOfDrawer
