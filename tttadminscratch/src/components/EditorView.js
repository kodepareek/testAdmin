import React, { PropTypes, Component } from 'react';

import {Datagrid,
        TextField,
        ReferenceField,
        List,
        Edit,
        SimpleForm,
        ReferenceInput,
        SelectInput, 
        TextInput,
        LongTextInput, 
        EditButton,
        DateField,
        Filter} from 'admin-on-rest/lib/mui';

import FlatButton from 'material-ui/FlatButton';

export const EditorView = (props) => {
  return (
    <List {...props} title="Fresh Tales" sort={{ field:'ID', order: 'ASC'}} filters={<EditorFilter />}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="format" />
        <TextField source="text" />
        <ReferenceField label="Writer" source="writerId" reference="writers">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="stars" />
        <EditButton />
        <ApproveButton />
        <RejectButton />
      </Datagrid>
    </List>
  )
}

export const EditorFilter = (props) => {
  return (<Filter {...props}>
    <ReferenceInput label="Stars" source="stars" reference="tales" allowEmpty>
      <SelectInput optionText="Number Of Stars" />
    </ReferenceInput>
  </Filter>)
}

export const EditorEdit = (props) => (
  <Edit {...props} title="Tale Editor">
    <SimpleForm>
      <TextField source="id" />
      <TextField source="stars" />
      <ReferenceField label="Writer Name" source="writerId" reference="writers">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField label="Writer Name" source="writerId" reference="writers">
        <DateField source="lastPublished" />
      </ReferenceField>
      <ApproveButton />
      <RejectButton />
      <TextInput source="format" />
      <LongTextInput source="text" />
    </SimpleForm>
  </Edit>
);

class ApproveButton extends Component {
  handleClick = () => {
    const { push, record, showNotification } = this.props;
    //must deep clone the record object to send it to db. Shouldnt vary it locally
    const updatedRecord = Object.assign({}, record)
    updatedRecord.status = 'approved';
    fetch(`http://localhost:3001/tales/${record.id}`,
      { 'method': 'PUT',
        'body': JSON.stringify(updatedRecord),
        'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    } })
      .then(() => {
          showNotification('This tale has been approved');
          push('/tales');
      })
      .catch((e) => {
        console.error(e);
        showNotification('Error: tale could not be approved, might be an internet problem', 'warning')
      });
  }
  render() {
      return <FlatButton label="Approve" onClick={this.handleClick} />;
  }
}

ApproveButton.propTypes = {
    push: PropTypes.func,
    record: PropTypes.object,
    showNotification: PropTypes.func,
};

class RejectButton extends Component {
  handleClick = () => {
    const { push, record, showNotification } = this.props;
    const updatedRecord = Object.assign({}, record)
    updatedRecord.status = 'rejected';
    fetch(`/tales/${record.id}`, { method: 'PUT', body: updatedRecord })
      .then(() => {
        showNotification('This tale has been rejected');
        push('/tales');
      })
      .catch((e) => {
        console.error(e);
        showNotification('Error: tale could not be rejected, might be an internet problem', 'warning')
      });
  }

  render() {
      return <FlatButton label="Reject" onClick={this.handleClick} />;
  }
}

RejectButton.propTypes = {
    push: PropTypes.func,
    record: PropTypes.object,
    showNotification: PropTypes.func,
};
