import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import KenGrid from '../../../global_components/KenGrid';
import KenCard from '../../../global_components/KenCard';
import './index.css';
import QuestionMarkIcon from '../../../assets/Examantions/QueIcon.svg';
import { getStudentReExam } from '../../../utils/ApiService';
import { KEY_USER_DETAILS } from '../../../utils/constants';

const ReExam = () => {
  const [loading, setLoading] = useState(false);
  const studentDetails = JSON.parse(localStorage.getItem(KEY_USER_DETAILS));

  const [data, setData] = React.useState([
    // {
    //   id: 1,
    //   Term: '3rd Sem',
    //   Course: 'Saran',
    //   ExamType: 'Label',
    //   ExamMode: 'Offline',
    //   Date: '17-08-2022',
    //   Time: '09:00 AM',
    //   isEligible: true,
    //   Score: '98/100',
    // },
    // {
    //   id: 2,
    //   Term: '5th Sem',
    //   Course: 'Saran',
    //   ExamType: 'Label',
    //   ExamMode: 'Offline',
    //   Date: '17-08-2022',
    //   Time: '09:00 AM',
    //   isEligible: false,
    //   Score: '98/100',
    // },
    // {
    //   id: 3,
    //   Term: '3rd Sem',
    //   Course: 'Saran',
    //   ExamType: 'Label',
    //   ExamMode: 'Offline',
    //   Date: '17-08-2022',
    //   Time: '09:00 AM',
    //   isEligible: true,
    //   Score: '98/100',
    // },
  ]);

  // Header
  const columns = [
    // {
    //   Header: '#',
    //   accessor: 'id',
    //   disableGlobalFilter: true,
    // },
    {
      Header: 'Term',
      accessor: 'Term',
      disableGlobalFilter: true,
    },
    {
      Header: 'Course',
      accessor: 'Course',
      disableGlobalFilter: true,
    },
    {
      Header: `Exam Type`,
      accessor: `ExamType`,
      disableGlobalFilter: true,
    },
    {
      Header: `Exam Mode`,
      accessor: `ExamMode`,
      disableGlobalFilter: true,
    },
    {
      Header: `Date`,
      accessor: `Date`,
      disableGlobalFilter: true,
    },
    {
      Header: `Time`,
      accessor: `Time`,
      disableGlobalFilter: true,
    },
    {
      Header: 'Seating Plan',
      accessor: 'seatingPlan',
      Cell: ({ value, row }) => {
        return (
          <Typography>
            {/* {value} / {row?.original?.FacultyAttendance} */}
            <VisibilityIcon color="primary" />
          </Typography>
        );
      },
      disableGlobalFilter: true,
    },
    {
      Header: 'Score',
      accessor: 'Score',
      disableGlobalFilter: true,
    },
    {
      Header: `Eligibility`,
      accessor: 'Eligibility',
      Cell: ({ value, row }) => {
        return (
          <>
            {data[row.id].isEligible === false ? (
              <>
                {' '}
                <Button
                  variant="contained"
                  color="primary"
                  className="not_eligible_btn"
                >
                  {'Not Eligible'}
                </Button>
                <img src={QuestionMarkIcon} />
              </>
            ) : (
              <Button
                variant="contained"
                color="primary"
                className="eligible_btn"
              >
                {'Eligible'}
              </Button>
            )}
          </>
        );
      },
      disableGlobalFilter: true,
    },
  ];

  const getReExam = async () => {
    try {
      const res = await getStudentReExam(studentDetails.ContactId);
      setLoading(true);

      if (!res) {
        return;
      }

      const data =
        res.length === 0
          ? []
          : res?.map(item => {
              return {
                id: item.CourseName,
                Term: item.CourseName,
                Course: item.CourseName,
                ExamType: item.ExamType,
                ExamMode: item.ExamMode,
                Date: item.exmDate,
                Time: item.exmTime,
                isEligible: item.EligiblityStatus === 'Eligible' ? true : false,
                Score: item.MarksObtained,
              };
            });
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log('errorerror', error);
    }
  };
  useEffect(() => {
    getReExam();
  }, []);

  return (
    <div className="table_main">
      <Grid container xs={12} className="table">
        <Grid container xs={12} style={{ padding: '5px' }} className="table">
          <Grid className="table_header haeder_title_text table_data_text">
            <KenCard paperStyles={{ padding: 0 }}>
              {/* {loading && <KenLoader />} */}

              <KenGrid
                columns={columns}
                data={data}
                pagination={{ disabled: true }}
                toolbarDisabled={true}
                isCollasable={false}
                noDataText={'No Record Found'}
              />
            </KenCard>
            <div />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ReExam;
