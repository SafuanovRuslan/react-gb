import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import './index.css'

export default function MenuItem({ children }) {

    const useStyles = makeStyles({
        ListItem: {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
      });

      const menu = useStyles();

    return (
            <ListItem button className={ menu.ListItem }>
                <ListItemIcon>
                {children}
                </ListItemIcon>
            </ListItem>
    );
}