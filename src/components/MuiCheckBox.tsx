import { Checkbox, FormControl, FormGroup, FormLabel, FormControlLabel, Box } from "@mui/material"
import React, { useState } from "react"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

const MuiCheckBox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false)
    const [skills, setSkills] = useState<string[]>([]) 

    console.log("acceptTnC", acceptTnC)
    console.log("skills", skills)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(e.target.checked)
    }

    const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const skill = e.target.value
        if (skills.includes(skill)) {
            setSkills(skills.filter((s) => s !== skill))
        } else {
            setSkills([...skills, skill])
        }
    }

    return (
        <>
            <Box>
                <FormControlLabel
                    label="I accept terms and conditions"
                    control={
                        <Checkbox
                            checked={acceptTnC}
                            onChange={handleChange}
                        />
                    }
                />
            </Box>

            <Box>
                <Checkbox
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                    checked={acceptTnC}
                    onChange={handleChange}
                />
            </Box>

            <Box>
                <FormControl>
                    <FormLabel>Select Skills</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            label="HTML"
                            control={
                                <Checkbox
                                    value="html"
                                    checked={skills.includes('html')}
                                    onChange={handleSkillChange}
                                />
                            }
                        />
                        <FormControlLabel
                            label="CSS"
                            control={
                                <Checkbox
                                    value="css"
                                    checked={skills.includes('css')}
                                    onChange={handleSkillChange}
                                />
                            }
                        />
                        <FormControlLabel
                            label="JavaScript"
                            control={
                                <Checkbox
                                    value="js"
                                    checked={skills.includes('js')}
                                    onChange={handleSkillChange}
                                />
                            }
                        />
                    </FormGroup>
                </FormControl>
            </Box>
        </>
    )
}

export default MuiCheckBox
