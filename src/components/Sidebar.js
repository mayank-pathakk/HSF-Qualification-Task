import React, { useState } from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import FormControlLabel from "@mui/material/FormControlLabel"
import Select from "@mui/material/Select"
import { Checkbox, FormGroup } from "@mui/material"
import * as styles from "../styles/sidebar.module.css"

export default function Sidebar(props) {
  const [status, setStatus] = useState("")
  const [vid, setVid] = useState(false)
  const statusChanger = event => {
    setStatus(event.target.value)
    props.stat_setter(event.target.value)
  }
  const vidChanger = (event, value) => {
    setVid(value)
    props.vid_setter(value)
  }
  return (
    <div style={{ margin: `20px` }}>
      <h4 className={styles.sortHeading}>Sort by</h4>
      <FormControl fullWidth className={styles.dropDown}>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Status"
          onChange={statusChanger}
        >
          <MenuItem value={""}>Filter by status</MenuItem>
          <MenuItem value={"stable"}>Stable</MenuItem>
          <MenuItem value={"alpha"}>Alpha</MenuItem>
          <MenuItem value={"beta"}>Beta</MenuItem>
        </Select>
      </FormControl>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox onChange={vidChanger} />}
          label="Has video?"
        />
      </FormGroup>
    </div>
  )
}
