export const validate = (values) => {
    const error = {};

    if (!values.session_name || values.session_name.includes(',')) {
        error.session_nameErr = "Please fill session name";
    } else {
        error.session_nameErr = "";
    }

    if (!values.session_date) {
        error.session_dateErr = "Please select session date";
    } else {
        error.session_dateErr = "";
    }

    if (!values.session_time) {
        error.session_start_timeErr = "Please select session start time";
    } else {
        error.session_start_timeErr = "";
    }

    if (!values.session_end_time) {
        error.session_end_timeErr = "Please select session end time";
    } else {
        error.session_end_timeErr = "";
    }

    if (!values.agent_name) {
        error.agent_nameErr = "Please select agent name";
    } else {
        error.agent_nameErr = "";
    }

    if (!values.state) {
        error.stateErr = "Please select state";
    } else {
        error.stateErr = "";
    }

    if (!values.village|| values.village.includes(',')) {
        error.villageErr = "Please fill village name";
    } else {
        error.villageErr = "";
    }

    if (!values.crop|| values.crop.includes(',')) {
        error.cropErr = "Please fill crop name";
    }  else {
        error.cropErr = "";
    }

    if (!values.tags || values.session_name.includes(',')) {
        error.tagsErr = "Please fill tags";
    }  else {
        error.tagsErr = "";
    }

    return error;
};
