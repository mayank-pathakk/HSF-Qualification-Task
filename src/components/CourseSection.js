import React, { useEffect, useState } from "react"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import YAMLData from "../data/courses.yaml"
import * as styles from "../styles/card.module.css"

const useYamlData = (status = "", isVideoPresent) => {
  const [courseData, setCourseData] = useState([])
  const filterVideo = isVideoPresent ? data => data.videos !== "" : data => data
  useEffect(() => {
    console.log({ status, isVideoPresent, filterVideo })
    const filteredData = YAMLData.filter(
      data => status === "" || status === 0 || data.status === status
    ).filter(filterVideo)
    setCourseData(filteredData)
  }, [status, isVideoPresent])

  return {
    courseData,
  }
}

const CourseSection = props => {
  const { curr_status, curr_vid } = props

  const { courseData } = useYamlData(curr_status, curr_vid)

  return (
    <div className={styles.outerContainer}>
      <h4 className={styles.courseHeading}>Courses</h4>
      <div>
        {courseData.map((data, index) => {
          let color = "red"
          let stat = data.status
          if (data.status === "stable") {
            color = "green"
          } else if (data.status === "alpha") {
            color = "red"
          } else {
            color = "rgb(239,204,0)"
          }
          return (
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Card
                  sx={{
                    minWidth: 700,
                    marginBottom: 1,
                    minHeight: 250,
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    sx={{ height: 100 }}
                    image="https://hepsoftwarefoundation.org/images/CERN-HSF-GSoC-logo.png"
                    // src={data.thumbnail}
                    title={data.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={data.repository}>
                      Repo
                    </Button>
                    <Button size="small" href={data.webpage}>
                      Website
                    </Button>
                    {curr_vid != "" ? (
                      <Button size="small" href={data.videos}>
                        Video
                      </Button>
                    ) : (
                      <div></div>
                    )}
                    <Button
                      size="small"
                      sx={{
                        backgroundColor: color,
                        color: "white",
                        pointerEvents: "none",
                      }}
                    >
                      {stat}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          )
        })}
      </div>
    </div>
  )
}
export default CourseSection
