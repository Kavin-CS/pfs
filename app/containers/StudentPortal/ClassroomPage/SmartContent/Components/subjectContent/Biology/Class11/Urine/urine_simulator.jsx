import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  animationWrap: {
    width: ' 90%',
    margin: '0 auto',
    padding: 12,
  },
  header: {
    fontSize: 20,
  },
}));

export default function Simulator() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src="//amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=BIC&amp;exp=UrineTest&amp;tempId=olab_ot //amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=BIC&amp;exp=UrineTest&amp;tempId=olab_ot&amp;type=sugar&amp;linktoken=6db1f5c341aa0fc454976ca7ad7d20b2&amp;elink_lan=en-IN&amp;elink_title=Detection of Sugar in Urine"
        width="900px"
        height="500px"
        align="middle"
        class="iframeStyle"
        frameborder="0"
        allowfullscreen="true"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Detection of Sugar in Urine. Retrieved 5
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=207&cnt=4
        </Typography>
      </div>
    </div>
  );
}
