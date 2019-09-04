import React from 'react';
import { Tab, Button } from '@alifd/next';
import styles from './index.module.scss'

export default function PostCategory() {
  const tabs = [
    {
      tab: '现任领导',
      icon: require('./images/post.png'),
      key: 'ld',
      content: mockCentent(),
    },
    {
      tab: '专家教授',
      icon: require('./images/post.png'),
      key: 'zj',
      content: mockCentent1(),
    },
    {
      tab: '主任医师',
      icon: require('./images/post.png'),
      key: 'zr',
      content: mockCentent2(),
    },
     
    {
      tab: '护理',
      icon: require('./images/post.png'),
      key: 'hl',
      content: mockCentent4(),
    },
    
    {
      tab: '检验',
      icon: require('./images/post.png'),
      key: 'jy',
      content: mockCentent6(),
    },
    {
      tab: '放射',
      icon: require('./images/post.png'),
      key: 'fs',
      content: mockCentent7(),
    },
    {
      tab: '人事',
      icon: require('./images/post.png'),
      key: 'rs',
      content: mockCentent8(),
    },
    {
      tab: '财务',
      icon: require('./images/post.png'),
      key: 'cw',
      content: mockCentent9(),
    },
    {
      tab: '后勤',
      icon: require('./images/post.png'),
      key: 'hq',
      content: mockCentent10(),
    },
    {
      tab: '保卫',
      icon: require('./images/post.png'),
      key: 'ab',
      content: mockCentent11(),
    },
    {
      tab: '其他',
      icon: require('./images/post.png'),
      key: 'qt',
      content: mockCentent12(),
    },
  ];

  return (
    <div>
      <div className={styles.titleWrapper}>
        <span className={styles.fbxp}>
          全院人才总览
        </span>
      </div>
      <Tab
        navStyle={{ backgroundColor: '#fff' }}
        contentStyle={{ backgroundColor: '#fff', marginTop: 20 }}
      >
        /* 遍历tabs */
        {tabs.map((item) => {
          return (
            <Tab.Item
              tabStyle={{ height: 60, padding: '0 15px' }}
              key={item.key}
              title={
                <div className={styles.navItemWraper}>
                  <img
                    alt={item.tab}
                    src={item.icon}
                    className={styles.imgas}
                  />
                  {item.tab}
                </div>
              }
            >
              <div className={styles.postCategoryList}>
                {item.content.map((item, index) => {
                  return (
                    <div key={index} className={styles.postCategoryItem}>
                      <div className={styles.coverWrapper}>
                        <img
                          alt={item.title}
                          className={styles.imgbs}
                          src={item.cover}
                        />
                      </div>
                      <div className={styles.blockDetail}>
                        <h3 className={styles.blockTitle}>{item.title}
                          <span className={styles.blockLable}>&nbsp;&nbsp;&nbsp;{item.work}</span>
                        </h3>

                        {item.detail.map((desc, detailIndex) => {
                          // 拆分字符串 
                          let word = desc.label;
                          let word1 = '';
                          let word2 = '';
                          if(word.includes(',')) {
                             let wordArray = word.split(',');
                             word1 = wordArray[0];
                             word2 = wordArray[1];
                          }  
                          
                          return (
                            <div key={detailIndex} className={styles.blockItem}>
                              <label className={styles.blockLable}>
                                {word1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{word2}
                              </label>
                              <div
                                className={styles.blockDesc}
                                // 在html属性中不需要{}
                                dangerouslySetInnerHTML={{
                                  __html: desc.desc,
                                }}
                              />
                            </div>
                          );
                        })}
                        
                      </div>
                    </div>
                  );
                })}
              </div>
            </Tab.Item>
          );
        })}
      </Tab>
    </div>
  );
}

/* mock数据 */
function mockCentent() {
 let list = [
    {
      title: '徐安定',
      work: '院长',
      cover: require('./images/xad.jpg'),
      url: '#',
      detail: [
        {
          label: '职,称',
          desc: '教授、主任医师',
        },
        {
          label: '擅,长',
          desc: '在微创脊柱外科领域做了大量卓有成效的临床工作和开创性基础研究，所带领的团队除了常规开展腰椎MED、射频消融、扩张管下内固定等脊柱微创技术，还在国内率先开展轴向融合内固定术、颈椎后路MED、MED下减压植骨融合术、经皮椎弓根钉棒等技术，发表脊柱微创相关论文数十篇，并在国内积极倡导及推广微创脊柱外科技术。',
        },
        {
          label: '简,介',
          desc: '教授、主任医师、博士研究生导师、医学博士，兼任骨科主任、脊柱外科主任。先后于德国脊柱外科中心、巴塞罗那儿童医院脊柱外科、美国UCLA脊柱外科中心、汉城广惠脊柱外科医院等地进修学习。致力于脊柱微创技术治疗脊柱退行性疾病和脊柱外科器械矫形的临床工作，以及脊柱外科生物力学和脊髓损伤的基础与临床研究。现任中华医学会骨科学分会微创学组委员；广东省医学会脊柱外科学分会副主任委员、微创学组组长；广东省康复医学会脊椎伤病专业委员会副主任委员；广东省医师学会骨科学分会副主任委员。',
        },       
      ],
    },
    {
      title: '张天托',
      work: '副院长',
      cover: require('./images/ztt.jpg'),
      url: '#',
      detail: [
        {
          label: '职,称',
          desc: '教授、主任医师',
        },
        {
          label: '擅,长',
          desc: '擅长诊治支气管哮喘、慢性咳嗽、慢性阻塞性肺病、肺炎、支气管扩张、肺癌等；对肺部小结节、胸腔积液、间质性肺病鉴别诊断和治疗颇具经验。',
        },
        {
          label: '简,介',
          desc: '教授、主任医师、医学博士、博士生导师。兼任中华医学会呼吸病学分会烟草学组、广东省医学会呼吸病学分会哮喘学组、广东省临床医学学会呼吸专业委员会委员、广东省老年保健协会呼吸专业委员会常务委员。主持国家自然科学基金、广东省自然科学基金、广东省科技计划、广州市科技计划等多项国家级和省部级科研项目。发表多篇SCI论著。',
        },
      ],
    },
    {
      title: '王存川',
      work: '副院长',
      cover: require('./images/wcc.jpg'),
      url: '#',
      detail: [
        {
          label: '职称',
          desc: '教授、医学博士',
        },
        {
          label: '擅,长',
          desc: '神经免疫病、脑血管病、神经感染性疾病，老年神经疾病等。',
        },
        {
          label: '简,介',
          desc: '一级主任医师，二级教授，博士研究生导师。中国免疫学会神经免疫分会主任委员；中国卒中学会免疫分会主任委员；中国医师协会神经内科医师分会神经免疫专业委员会主任委员；中国中西医结合学会脑心同治专业委员会副主任委员；中华医学会神经病学分会神经免疫学组前组长；广东省卒中学会名誉会长（法定代表人）；广东省医学会神经病学分会前主任委员；《中国神经免疫学和神经病学杂志》主编。 1996年胡学强教授获“广东省优秀中青年专家”称号。曾获得广东省科技成果三等奖一项；省自然科学三等奖二项；广东省科技成果二等奖一项；国家教委科技进步二等奖二项；教育部科技进步二等奖一项。卫生部与中华医学会优秀论文一等奖1项，第五届“吴阶平医学研究奖、保罗·杨森药学研究奖”二等奖。 30余年来一直从事神经病学医疗、教学、科研工作。科研上主要从事神经免疫性疾病、脑血管疾病的研究工件，共发表论文300余篇（通讯作者发表SCI论文80余篇），主编出版了《多发性硬化》（人民卫生出版社）、《基层心脑血管病的防治》（中国军事医学出版社）、《神经免疫性疾病新进展》（中山大学出版社）等专著多本。',
        },
      ],
    },
    {
      title: '查振刚',
      work: '党委书记',
      cover: require('./images/czg.jpg'),
      url: '#',
      detail: [
        {
          label: '职,称',
          desc: '教授、中心主任',
        },
        {
          label: '擅,长',
          desc: '心血管内科疑难病、危重心脏病诊治和介入心脏冠脉扩张、冠脉支架置放、二尖瓣球囊扩张、心脏起搏器植入。',
        },
        {
          label: '简,介',
          desc: '心血管内科主任。广东：医学会心血管分会常委、预防学组副组长，医师协会心脏辅助器械治疗分会副主委、心血管分会常委、心脏介入医师分会常委，中西医结合心血管介入分会副主委，医疗行业协会心血管分会常务副主委，健康管理协会心血管病分会副主委；中国大湾区心脏病协会副会长，中国心脏联盟心血管病预防与康复学会广东分联盟常委。 ',
        },
      ],
    },
    {
      title: '陈玉兵',
      work: '党委副书记',
      cover: require('./images/cyb.jpg'),
      url: '#',
      detail: [
        {
          label: '职,称',
          desc: '教授、中心主任',
        },
        {
          label: '擅,长',
          desc: '擅长诊治支气管哮喘、慢性咳嗽、慢性阻塞性肺病、肺炎、支气管扩张、肺癌等；对肺部小结节、胸腔积液、间质性肺病鉴别诊断和治疗颇具经验。 ',
        },
        {
          label: '简,介',
          desc: '主任医师、医学博士、博士生导师。兼任中华医学会呼吸病学分会烟草学组、广东省医学会呼吸病学分会哮喘学组、广东省临床医学学会呼吸专业委员会委员、广东省老年保健协会呼吸专业委员会常务委员。主持国家自然科学基金、广东省自然科学基金、广东省科技计划、广州市科技计划等多项国家级和省部级科研项目。发表多篇SCI论著。',
        },
      ],
    },
    {
      title: '闭思成',
      work: '行政副院长',
      cover: require('./images/bsc.jpg'),
      url: '#',
      detail: [
        {
          label: '职,称',
          desc: '教授、医学博士',
        },
        {
          label: '擅,长',
          desc: '对各期乳腺癌的手术、化疗、内分泌治疗及靶向治疗有较高的造诣，对甲状腺良恶性疾病诊治，特别在甲状腺手术及术中甲状旁腺、喉返神经保护特有专长。',
        },
        {
          label: '简,介',
          desc: '甲状腺乳腺外科主任及乳腺疾病诊治中心主任，学科带头人，从事甲状腺乳腺疾病诊治临床工作30年。1999年赴香港大学玛丽医院外科临床进修，曾于美国哈佛大学附属麻省总医院从事博士后研究及临床进修4年余，师从哈佛大学麻省总医院乳腺癌症中心主任Barbara L. Smith教授、Samuel D. Rabkin及著名甲状腺外科专家Gregory W. Randolph教授。先后多次被评为中山大学优秀教师及先进医务工作者，曾被评为中山大学校级优秀共产党员及中山三院优秀共产党员，2015年被评为“羊城好医生”。获得并主持国家自然科学基金4项、广东省自然科学基金重点项目及面上项目、国际合作项目、中山大学“211”工程基金等科研基金10余项，发表科研论文70余篇。培养医学博士及硕士研究生20余名。',
        },
      ],
    }
  ];

  return list.map(function(item) {
    return {
      title: item.title,
      work: item.work,
      cover: item.cover,
      url: '#',
      detail: item.detail,
    };
  });
}

/* mock数据 */
function mockCentent1() {
 let list = [
    {
      title: '张立溪',
      work: '教授、主任医师',
      cover: require('./images/lsm.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '外科',
        },
        {
          label: '擅,长',
          desc: '对复杂食管化学烧伤、巨块型肺癌、各种类型复杂食管癌、食管失迟缓症、胸腔巨大肿瘤及重症肌无力等的外科治疗方面和危重疑难复杂病人的救治有丰富的临床经验，熟悉胸腔镜辅助下肺癌、食管癌、纵隔肿瘤、重度漏斗胸、多汗症等微创胸外科手术。在长期的一线临床工作中多次受到海内外电视、报纸、网络等媒体的报道，获得广大患者的高度好评。',
        },
        {
          label: '简,介',
          desc: '从医四十余年，曾师从建国初期我国著名胸心外科专家蔡用之教授、汪曾伟教授、徐日兴教授。在胸心血管外科领域具备深厚的理论基础，在心血管疾病、肺部肿瘤、食管疾病和纵膈肿瘤的外科治疗等方面有很高学术造诣，为华南地区胸心外科领域知名的专家。南方医科大学胸心外科资深专家组成员；在珠江医院胸心外科建科过程中有突出贡献，荣获军队集体三等功，在南方医院工作中因抢救危重患者获个人三等功，军队科技进步三等奖，医院成果一等奖，医院成果二等奖。',
        },       
      ],
    },
    {
      title: '刘立新',
      work: '教授、主任医师',
      cover: require('./images/qwc.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '胸外科',
        },
        {
          label: '擅,长',
          desc: '擅长甲状腺、乳腺、胃肠、肝胆、肛肠等普外科疾病的诊治和微创手术，尤其擅长甲状腺癌、乳腺癌、胃癌、胃恶性淋巴瘤以及胃肠间质瘤等恶性肿瘤的诊断和治疗，在甲状腺癌根治及功能性颈淋巴结清扫术、乳腺癌根治及改良根治术、胃及肠癌根治术、肝脏及复杂胆道手术、消化道肿瘤的微创治疗等方面有丰富的临床经验。',
        },
        {
          label: '简,介',
          desc: '主任医师，教授，硕士研究生导师，普通外科科主任。1991年哈尔滨医科大学本科毕业获学士学位，分别于上海医科大学、华西医科大学获外科硕士和博士学位。在医科大学附属三甲医院工作多年，在国内外发表论文三十余篇，出版专著三部，先后获国家自然基金、省自然基金、省科研基金、省适宜卫生技术推广项目等，多次获得校级、院级多项奖励。研究方向为结直肠癌转移的分子病理学分析。',
        },
      ],
    },
    {
      title: '陈佩贞',
      work: '教授、主任医师',
      cover: require('./images/cpz.png'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '乳腺外科',
        },
        {
          label: '擅,长',
          desc: '擅长乳腺疾病的诊治，特别是产后乳腺疾病有独到的见地。擅长肝、胆、胰、脾、腹主动脉瘤、周围血管瘤、肝硬化门脉高压症等疾病的外科手术治疗。对甲状腺、乳腺、胃肠肿瘤及疑难病例的手术治疗有丰富的临床经验。尤其擅长涉及多脏器、大血管的高难度手术。曾多次为党、政、军的中央高层领导进行手术及健康保健咨询。',
        },
        {
          label: '简,介',
          desc: '赵国湘，主任医师，教授。毕业于中国人民解放军第一军医大学。从事普外科、肝胆外科、血管外科等科室的临床、教学及科研工作40余年，在本专业领域具有丰富的临床经验。曾获军队科技进步奖，发表论文30余篇。现虽已年过花甲，仍坚持在医疗、教学及科研工作的第一线做好“传帮带”工作，为医学事业的发展发挥余热。',
        },
      ],
    },
    {
      title: '贾满盈',
      work: '教授、主任医师',
      cover: require('./images/lyf.png'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '心血管内科',
        },
        {
          label: '擅,长',
          desc: '冠心病介入及影像诊断、心律失常的诊断及射频消融术、起搏器植入术、心血管内科急危重症诊断治疗，对突发脑溢血、脑死亡等并发症有深入研究。',
        },
        {
          label: '简,介',
          desc: '从事心血管内科临床工作及教学40余年。在心血管急危重症病人抢救方面积累了丰富的经验，参与国家及省级课题多项。获军队科技成果多项。发表科研论文40余篇。主编《临床心血管病急诊学》、《内科学考试指导》专著各1部。',
        },
      ],
    },
    {
      title: '曾波航',
      work: '教授、主任医师',
      cover: require('./images/hbh.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '肿瘤科',
        },
        {
          label: '擅,长',
          desc: '各种肿瘤的诊断及鉴别诊断,各种疑难病的诊断及处理,开展肿瘤相关基因检测,达到早期诊断肿瘤的目的。开展肺癌、乳腺癌、淋巴瘤等基因治疗,淋巴瘤、肺癌、乳腺癌及胃肠道肿瘤的化疗、生物治疗,肺癌、乳腺癌、肾癌、淋巴瘤及肠癌等进行靶向治疗。',
        },
        {
          label: '简,介',
          desc: '医学博士，主任医师，硕士研究生导师。1991年毕业于浙江医科大学，获医学博士学位。现任广州医学院第二附属医院肿瘤科主任，中华医学会广州肿瘤学会副主任，广东省医学生物学会常委，广东省中西医结合学会肿瘤专业委员会常委，广东省抗癌协会生物治疗学会常委。广州抗癌协会及广州抗癌协会生物治疗专业委员会和化疗专业委员会常委。第一批“千百十”工程人选，广东省自然科学成果鉴定专家，广东省科技厅、广州市科技局科研项目评审专家及国家自然科学基金评审专家。近年主持国家自然基金项目，国家教育部骨干教师课题，省科技攻关项目，省卫生科技基金和市教委基金多项。曾先后在国内外杂志、国家核心刊物发表肿瘤学学术论文60余篇。获省，市科技进步奖各1项，主讲《内科学》、《诊断学》有关内容。从事肿瘤专业临床工作30年，积累了丰富的临床经验，熟练掌握各种肿瘤的诊断及鉴别诊断，掌握各种疑难病的诊断及处理，积极开展肿瘤相关基因检测，达到早期诊断肿瘤的目的。积极开展肺癌、乳腺癌、淋巴瘤等基因治疗。',
        },
      ],
    },
    {
      title: '曹梅',
      work: '教授、主任医师',
      cover: require('./images/hbl.png'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '呼吸内科',
        },
        {
          label: '擅,长',
          desc: '慢性咳嗽、胸腔积液、支气管哮喘、慢性支气管炎、肺气肿、肺炎等呼吸病的诊治，疑难肺呼吸疾病、慢性病的诊疗、手术、定向摘除、定向靶细胞治疗等。',
        },
        {
          label: '简,介',
          desc: '呼吸内科主任、教授、主任医师，硕士研究生导师、中华医学会广东省呼吸学会常委、中华医学会广东结核病分会常委，广州市呼吸学会副主任委员，从事呼吸内科临床、教学和科研工作30年。对呼吸系统常见疾病、疑难病例的诊断和治疗具有丰富的临床经验，熟练掌握纤维支气管镜、呼吸机的使用。擅长慢性咳嗽、胸腔积液、支气管哮喘、慢性支气管炎，阻塞性肺气肿、肺部肿瘤、肺炎、肺间质纤维化、支气管扩张和睡眠呼吸障碍等疾病的诊治。已发表科研论文30余篇，获得过广东省科技攻关科研课题和广东省自然科学基金课题等立项。',
        },
      ],
    }
  ];

  return list.map(function(item) {
    return {
      title: item.title,
      work: item.work,
      cover: item.cover,
      url: '#',
      detail: item.detail,
    };
  });
}
// mock数据
function mockCentent2() {
  let list = [
  {
      title: '解龙昌',
      work: '主任医师',
      cover: require('./images/xlc.png'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '神经内科',
        },
        {
          label: '擅,长',
          desc: '对“眩晕症、脑梗塞，脑出血”等脑血管疾病、脑炎、脱髓鞘疾病（视神经脊髓炎，多发性硬化等）、重症肌无力、格林巴利综合征等及帕金森病、多种神经性疼痛、头晕头痛诊治具有丰富经验。',
        },
        {
          label: '简,介',
          desc: '医学博士，教授、主任医师，科副主任，硕士研究生导师。1991年山西医科大学本科毕业分配在山西医科大学第一医院神经内科工作，2008年10月调入广州医科大学附属第二医院神经内科工作，现任中华医学会广东省神经病学分会神经急危重症学组委员、广州市医师协会神经内科分会常委、广州市医学会神经内科分会委员、广东省老年保健协会神经内科委员会委员、广东省康复医学会脑卒中防治与康复专业委员会委员、广东省保健协会抗衰老及脑变性病防治专业委员会委员等。 重点研究眩晕性疾病，对难治性良性阵发性位置性眩晕、前庭性偏头痛、前庭神经炎的诊治具有独到疗效，同时对神经免疫疾病、神经内科的少见病、罕见病有丰富的临床经验。上述的临床与基础研究已经在多方面取得多项研究成果，20余年来发表论文50余篇，主编论著2部,共20余万字。主持课题有广东省自然基金及广东省科技计划基金等多项。',
        },
      ],
    },
    {
      title: '傅慧芳',
      work: '主任医师',
      cover: require('./images/fhh.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '肾内科',
        },
        {
          label: '擅,长',
          desc: '原发性和继发性肾小球疾病(如急、慢性肾炎、肾病综合症、肾小管－间质性疾病、狼疮性肾炎等)、尿路感染、急性肾衰竭和尿毒症的诊断和治疗。',
        },
        {
          label: '简,介',
          desc: '主任医师，硕士研究生导师，广州市医学会老年病分会主任委员，广州市医学会全科医学分会副主任委员。1987年毕业于中山医科大学医疗系，1999年获中山医科大学肾内科硕士学位。 专业特长：泌尿系感染的诊断与治疗、前列腺炎的诊断与治疗；急慢性肾小球肾炎、IgA肾病、肾病综合征的诊断与治疗；糖尿病肾病、系统性红斑狼疮性肾炎、紫癜性肾炎、高血压肾病的诊断与治疗；血尿、蛋白尿、水肿、高血压病人的诊断与治疗；急慢性肾功能衰竭的腹膜透析、血液透析的治疗；肾移植病人的术后监测。熟练掌握肾穿刺活检病理诊断、腹膜透析置管等技术。先后主持合参与广东省卫生科研项目及广东省自然科学基金研究，在各级医学学术杂志上发表学术论文10篇。',
        },
      ],
    },
    {
      title: '陈澍',
      work: '主任医师',
      cover: require('./images/cp.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '内分泌科',
        },
        {
          label: '擅,长',
          desc: '内分泌代谢疾病，如：糖尿病、甲状腺、更年期、骨质疏松症、下丘脑-垂体、肾上腺等疾病的临床诊治及教学，以及各种内分泌疾病的诊治。',
        },
        {
          label: '简,介',
          desc: '主任医师，硕士研究生导师。广东省医师协会内分泌分会常委；广东省医学会糖尿病学分会委员；国家、广东省自然科学基金项目评审专家。 1983年中山医科大学医学系毕业，获学士学位。同年起广州医学院第二附属医院内分泌科工作。1990年湖南医科大学获内分泌专业硕士学位。1991年1月- 1993年2月 美国国家毒理研究中心访问学者，参与美国FDA及能源部课题--热量限制延长寿命机制探讨：对内分泌、糖代谢、胰岛素抗性影响的研究。1999年获硕士研究生导师资格；2000年晋升主任医师。 1998年起主持或参与广东省科委、省中医药管理局、省卫生厅、广州市卫生局、广州医学院等立项课题10多项，撰写论文7０多篇。',
        },
      ],
    },
    {
      title: '杨辉',
      work: '主任医师',
      cover: require('./images/yh.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '消化内科',
        },
        {
          label: '擅,长',
          desc: '擅长消化性溃疡、胃食管反流病，功能性胃肠病，脂肪肝，肝硬化，胰腺炎，炎症性肠病等疾病的诊治；消化内镜的微创手术治疗，胃癌诊治。',
        },
        {
          label: '简,介',
          desc: '医学博士，消化内科教授，博士研究生导师、博士后合作导师、硕士研究生导师，广东杰出青年医学人才，广东省自然科学基金杰出青年基金获得者，广州市高层次卫生骨干人才，广东省内镜学分会副主任委员，中华医学会肝病学分会青年委员，广东省消化病学分会常务委员，广东省医学会肝病学分会青年委员兼秘书，广东医师协会肝病专科分会肝癌专业组副组长和广东省医疗行业管理分会门脉高压协会常委；长期从事消化专业临床与研究工作，具有丰富的临床经验，擅长消化性溃疡、胃食管反流病、功能性胃肠病、脂肪肝、病毒性肝炎、肝硬化、胰腺炎和炎症性肠病等疾病的诊治。',
        },
      ],
    },
    {
      title: '万蕾',
      work: '主任医师',
      cover: require('./images/wl.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '感染病科',
        },
        {
          label: '擅,长',
          desc: '感染性疾病、病毒性肝炎、肝硬化的诊治，传染病疑难、危重传染病及发热原因不明患者的临床诊断和治疗具有较丰富的经验。',
        },
        {
          label: '简,介',
          desc: '主任医师，学士。现任广东省感染病医师协会委员，广州市感染病学会常务委员，广州市肝病学会委员。专长传染病、肝病诊治，发热、黄疸的鉴别诊断与治疗。',
        },
      ],
    },
    {
      title: '王卓丹',
      work: '主任医师',
      cover: require('./images/wzd.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '麻醉科',
        },
        {
          label: '擅,长',
          desc: '从事近15年的临床医疗工作，在复杂心脏血管手术麻醉与心功能保护、颅脑手术麻醉与脑保护、器官移植麻醉与功能保护、血液保护等领域作了较深入研究。',
        },
        {
          label: '简,介',
          desc: '广州医学会麻醉学会常、广州医学会血液保护学会委员。从事近15年的临床医疗工作，在复杂心脏血管手术麻醉与心功能保护、颅脑手术麻醉与脑保护、器官移植麻醉与功能保护、血液保护等领域作了较深入研究并取得一定成绩。率先在我院开展了自体血液回收、靶控反馈全凭静脉麻醉、BIS麻醉深度监测、无创心功能监测等技术。。',
        },
      ],
    },
    {
      title: '曾格瓦',
      work: '主任医师',
      cover: require('./images/cgw.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '泌尿外科',
        },
        {
          label: '擅,长',
          desc: '尿路结石、前列腺疾病、男科疾病、泌尿系肿瘤的诊治,擅长腔内微创手术以及经尿道前列腺电切、膀胱肿瘤电切、泌尿外科整形手术(如尿道下裂)。',
        },
        {
          label: '简,介',
          desc: '医学硕士，中华医学会广州泌尿外科分会委员、广东省医学会微创外科泌尿外科组委员。专长:尿路结石、前列腺疾病、男科疾病、泌尿系肿瘤的诊治,擅长腔内微创手术以及经尿道前列腺电切、膀胱肿瘤电切、泌尿外科整形手术(如尿道下裂)。',
        },
      ],
    },
    {
      title: '郑强',
      work: '主任医师',
      cover: require('./images/zq.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '肝胆外科',
        },
        {
          label: '擅,长',
          desc: '熟练开展胰十二指肠切除术、肝门部胆管癌骨骼化切除术、巨块型肝癌切除术、肝内外胆管多发结石取石术等复杂手术,以及腹腔镜、十二指肠镜、胆道镜等微创治疗。',
        },
        {
          label: '简,介',
          desc: '长期从事普通外科、肝胆胰外科的医、教、研工作。熟练开展胰十二指肠切除术、肝门部胆管癌骨骼化切除术、巨块型肝癌切除术、肝内外胆管多发结石取石术等复杂手术以及腹腔镜、十二指肠镜、胆道镜等微创治疗。尤其擅长于运用ERCP技术微创治疗胆管结石、AOSC、胆管癌、胰腺癌、重症胰腺炎及胆管损伤等危重复杂疾病。',
        },
      ],
    }
  ];

  return list.map(function(item) {
      return {
        title: item.title,
        work: item.work,
        cover: item.cover,
        url: '#',
        detail: item.detail,
      };
    });
}
// mock数据 主治医师
function mockCentent3() {
  let list = [];
  return list.map(function(item) {
      return {
        title: item.title,
        work: item.work,
        cover: item.cover,
        url: '#',
        detail: item.detail,
      };
    });
}
// mock数据
function mockCentent4() {
let list = [
    {
      title: '陈伟菊',
      cover: require('./images/hjw.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '住院部',
        },
        {
          label: '职,称',
          desc: '护士长',
        },
      ],
   },
   {
      title: '何金爱',
      cover: require('./images/hja.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '住院部',
        },
        {
          label: '职,称',
          desc: '护士长',
        },
      ],
   },
  {
      title: '周佩如',
      cover: require('./images/lqr.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '住院部',
        },
        {
          label: '职,称',
          desc: '护士长',
        },
      ],
   },
   {
      title: '黄洁微',
      cover: require('./images/ws.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '住院部',
        },
        {
          label: '职,称',
          desc: '护士长',
        },
      ],
   },
   {
      title: '李慧裙',
      cover: require('./images/hsj.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '住院部',
        },
        {
          label: '职,称',
          desc: '护士长',
        },
      ],
   },
   {
      title: '张英洁',
      cover: require('./images/hxl.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '住院部',
        },
        {
          label: '职,称',
          desc: '护士长',
        },
      ],
   }
];
return list.map(function(item) {
    return {
      title: item.title,
      work: item.work,
      cover: item.cover,
      url: '#',
      detail: item.detail,
    };
  });
}
// mock数据
function mockCentent5() {
let list = [];
return list.map(function(item) {
    return {
      title: item.title,
      work: item.work,
      cover: item.cover,
      url: '#',
      detail: item.detail,
    };
  });
}

// mock数据 检验
function mockCentent6() {
let list = [{
      title: '夏 勇',
      cover: require('./images/xy.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '检验科',
        },
        {
          label: '职,称',
          desc: '主任医师',
        },
        
      ],
   },
   {
      title: '张伟雯',
      cover: require('./images/zww.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '检验科',
        },
        {
          label: '职,称',
          desc: '副主任医师',
        },
        
      ],
   },
   {
      title: '刘美玲',
      cover: require('./images/lml.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '检验科',
        },
        {
          label: '职,称',
          desc: '副主任医师',
        },
        
      ],
   },
   {
      title: '唐希才',
      cover: require('./images/txc.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '检验科',
        },
        {
          label: '职,称',
          desc: '主治医师',
        },
        
      ],
   },
   {
      title: '洪宏海',
      cover: require('./images/hhh.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '检验科',
        },
        {
          label: '职,称',
          desc: '主治医师',
        },
        
      ],
   },
   {
      title: '郭旭光',
      cover: require('./images/gxg.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '检验科',
        },
        {
          label: '职,称',
          desc: '主治医师',
        },
        
      ],
   }
];
return list.map(function(item) {
    return {
      title: item.title,
      work: item.work,
      cover: item.cover,
      url: '#',
      detail: item.detail,
    };
  });
}

// mock数据 放射
function mockCentent7() {
let list = [
   {
      title: '张金山',
      cover: require('./images/zjs.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '放射科',
        },
        {
          label: '职,称',
          desc: '主任医师',
        },
        
      ],
   },
   {
      title: '邓咏梅',
      cover: require('./images/dym.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '放射科',
        },
        {
          label: '职,称',
          desc: '副主任医师',
        },
        
      ],
   },
   {
      title: '姚红霞',
      cover: require('./images/yhx.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '放射科',
        },
        {
          label: '职,称',
          desc: '副主任医师',
        },
        
      ],
   },
   {
      title: '芩东芝',
      cover: require('./images/cdz.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '放射科',
        },
        {
          label: '职,称',
          desc: '主治医师',
        },
        
      ],
   },
   {
      title: '温 戈',
      cover: require('./images/wg.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '放射科',
        },
        {
          label: '职,称',
          desc: '主治医师',
        },
        
      ],
   },
   {
      title: '李园',
      cover: require('./images/ly.jpg'),
      url: '#',
      detail: [
        {
          label: '科,室',
          desc: '放射科',
        },
        {
          label: '职,称',
          desc: '主治医师',
        },
        
      ],
   }
];
return list.map(function(item) {
    return {
      title: item.title,
      work: item.work,
      cover: item.cover,
      url: '#',
      detail: item.detail,
    };
  });
}

// mock数据
function mockCentent8() {
let list = [];
return list.map(function(item) {
    return {
      title: item.title,
      work: item.work,
      cover: item.cover,
      url: '#',
      detail: item.detail,
    };
  });
}

// mock数据
function mockCentent9() {
let list = [];
return list.map(function(item) {
    return {
      title: item.title,
      work: item.work,
      cover: item.cover,
      url: '#',
      detail: item.detail,
    };
  });
}

// mock数据
function mockCentent10() {
let list = [];
return list.map(function(item) {
    return {
      title: item.title,
      work: item.work,
      cover: item.cover,
      url: '#',
      detail: item.detail,
    };
  });
}

// mock数据
function mockCentent11() {
let list = [];
return list.map(function(item) {
    return {
      title: item.title,
      work: item.work,
      cover: item.cover,
      url: '#',
      detail: item.detail,
    };
  });
}

// mock数据
function mockCentent12() {
let list = [];
return list.map(function(item) {
    return {
      title: item.title,
      work: item.work,
      cover: item.cover,
      url: '#',
      detail: item.detail,
    };
  });
}
