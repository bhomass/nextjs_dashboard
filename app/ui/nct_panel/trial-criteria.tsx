'use client'

import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
// import { Criterion } from '@/app/lib/definitions';
import Paper from "@material-ui/core/Paper";
import yellow from "@material-ui/core/colors/yellow";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  inc_paper: {
    width: "100%",
    backgroundColor: 'white'
  },
  exc_paper: {
    width: "100%",
    backgroundColor: 'lightgrey'
  },
  card: {
    backgroundColor: 'blue'
  }
});
export default function TrailCriteria({
  inclusions, exclusions
}: {
  inclusions: string[]; exclusions: string[];
}) {
  console.log('in nav:', inclusions)
  const classes = useStyles();
  return (
    <div className="flex w-full flex-col md:col-span-8">
      <h6 className={`${lusitana.className} md:text-2xl`}>
        Inclusions
      </h6>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}

        <div className="bg-white px-6">
          {inclusions.map((inclusion, i) => {
            console.log(inclusion)
            return (
              <Box sx={{ width: '100%' }}
                key={i}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
              <Paper elevation={6} className={classes.inc_paper}>
                <Box sx={{ width: '100%' }} display='in-line-block' p={1}>
                  <Typography variant="h6">{inclusion}</Typography>
                </Box>
              </Paper>
              </Box>
            );
          })}
        </div>
      <h6 className={`${lusitana.className} md:text-2xl`}>
        Exclusions
      </h6>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}

        <div className="bg-white px-6">
          {exclusions.map((exclusion, i) => {
            // console.log(exclusion)
            return (
              <Box sx={{ width: '100%' }}
                key={i}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
              <Paper elevation={6} className={classes.exc_paper}>
                <Box sx={{ width: '100%' }} display='in-line-block' p={1}>
                  <Typography variant="h6">{exclusion}</Typography>
                </Box>
              </Paper>
              </Box>
            );
          })}
        </div>        
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
