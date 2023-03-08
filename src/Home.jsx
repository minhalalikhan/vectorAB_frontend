import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Select from 'react-select';



const Home = () => {


  const [subject_list, setSubject_list] = useState([])
  const [exams_list, setexams_list] = useState([])
  const navigate = useNavigate()

  const [examData, setExamData] = useState({ select_exam: '', difficulty: '' })
  const [showSubject, setShowSubject] = useState(0)
  const [subjects, setSubjects] = useState([])

  function handleChange(event) {
    if (event.target.value !== "neglect")
      setExamData({ ...examData, [event.target.name]: event.target.value })

  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!(showSubject === 1 || showSubject === -1) || examData.difficulty === '' || examData.select_exam === '') {
      alert("Pleae Select All Fields")
    }
    else {
      //  navigate('/Exam')
      const final_data = {
        ...examData,
        complete: (showSubject === 1 ? 0 : 1),
        subjectList: subjects,
      }

      console.log(final_data)
    }
  }

  useEffect(() => {
    console.log("getting exams")
    const fetchData = async () => {
      const getexamlist = await axios.get("http://localhost:3002/vectorab-api/get-courses")
      if (getexamlist.status === 200)
        setexams_list(getexamlist.data.courses)
    }

    fetchData()
  }, [])

  useEffect(() => {


    const fetchData = async () => {
      if (examData.select_exam !== '') {
        console.log("getting subjects")
        try {
          const getSubjectlist = await axios.post("http://localhost:3002/vectorab-api/get-subjects", { course: examData.select_exam })

          if (getSubjectlist.status === 200)
            setSubject_list(getSubjectlist.data.subjects)

        }
        catch (err) {
          console.log(err)
        }
      }

    }

    fetchData()
  }, [examData.select_exam])

  return (
    <>
      <div className="App" style={{ margin: '50px auto' }} >
        <form onSubmit={handleSubmit}>
          <div class="form">
            <h2>
              Exam Prep</h2>
            <div class="form-element">
              <label for="Exam">
                Select an Exam

                <select name="select_exam" id="select_exam" onChange={handleChange} value={examData.select_exam}>
                  <option value="neglect"></option>
                  {
                    exams_list.map((item, i) => {
                      return <option value={item} key={i}>{item}</option>
                    })
                  }

                </select>
              </label>
            </div>
            <div class="form-element">
              <label for="difficulty" className='select-radio'>
                Choose difficulty
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                  <label for="difficulty">
                    <input type="radio" value="Easy" name="difficulty" onChange={handleChange} required />
                    Easy
                  </label>
                  <label for="difficulty">
                    <input type="radio" value="Medium" name="difficulty" onChange={handleChange} />
                    Medium
                  </label>
                  <label for="difficulty">
                    <input type="radio" value="Hard" name="difficulty" onChange={handleChange} />
                    Hard
                  </label>
                </div>
              </label>

            </div>
            <div class="form-element">

              <button type="button" className={showSubject === -1 ? 'button-exam-choice-selected' : 'button-exam-choice'}
                onClick={() => {
                  setShowSubject(-1)

                  // setExamData({ ...examData, complete: 1 });
                }}>
                Complete Exam
              </button>

              <p style={{ margin: '5px', textAlign: 'center', }}>---- OR ----</p>

              <button type="button" className={showSubject > 0 ? 'button-exam-choice-selected' : 'button-exam-choice'}
                onClick={() => {
                  //setExamData({ ...examData, complete: 0 });
                  setShowSubject(1)
                }}>
                Subject-Wise Exam
              </button>

              {showSubject > 0 ? <Select options={subject_list}
                onChange={(data) => setSubjects(data)}
                isMulti
                name="subjects"

                styles={{ container: (style) => ({ ...style, margin: '10px' }) }}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  margin: '10px',
                  colors: {
                    ...theme.colors,
                    primary25: 'lightgrey',
                    primary: 'black',
                  },
                })}
              /> : <></>
              }
              <button> Give Exam </button>
            </div>
          </div>
        </form>

      </div>
    </>
  )
};

export default Home;