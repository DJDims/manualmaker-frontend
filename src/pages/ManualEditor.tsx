import Button from '../components/Button';
import InputFile from '../components/InputFile';
import InputText from '../components/InputText';
import Menu from '../components/Menu';
import Tag from '../components/Tag';
import TextArea from '../components/TextArea';

export default function ManualEditor() {

	return (
		<>
			<Menu />
			<div className='content'>
				<form className="manual-settings">
					<InputText label='Manual title' name='title'/>
					<TextArea label='Manual title2' name='title'></TextArea>
					<InputFile label='Tags' name='tags' variant='inline' />
					<div className="manualTags">
						<InputText label='Tags' name='tags' variant='inline' />
						<div className="tags">
							<Tag name="javascript" bgColor="#efd81d" txColor={false} />
							<Tag name="typescript" bgColor="#2F74C0" txColor={true} />
							<Tag name="nest.js" bgColor="#D9224C" txColor={true} />
						</div>
					</div>
					<div className="buttons">
						<Button label="Go back" color="default"/>
						<Button label="Next" color="default"/>
					</div>
				</form>
			</div>
		</>
	)
}