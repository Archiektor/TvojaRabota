import React from 'react';
import s from './Staff.module.scss';
import Member from './member/Member';
import firstMember from '../../assets/images/anna.jpg';

const Staff: React.FC = React.memo(() => {
    //let staffMembers =

    return (
        <div className={s.wrapper}>
            <h2 className={s.wrapper__title}>Сотрудники</h2>
            <div className={s.container}>
                <Member memberPhoto={firstMember} memberPhone={'+48 500-111-222'}
                        memberDescr={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem fugit nemo, provident quod quos saepe.'}/>
                <Member memberPhoto={firstMember} memberPhone={'+48 500-111-222'}
                        memberDescr={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores error expedita ipsam, minus quo?'}/>
                <Member memberPhoto={firstMember} memberPhone={'+48 500-111-222'}
                        memberDescr={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti exercitationem facere fugit, inventore iure quibusdam?'}/>
                <Member memberPhoto={firstMember} memberPhone={'+48 500-111-222'}
                        memberDescr={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eius eligendi modi provident quo, rem!'}/>
                <Member memberPhoto={firstMember} memberPhone={'+48 500-111-222'}
                        memberDescr={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae facere nisi omnis provident sequi voluptatem.'}/>

            </div>
        </div>
    )
})

export default Staff;