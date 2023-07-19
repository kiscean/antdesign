import React from 'react';
import { Card, Space } from 'antd';
import { Col, Divider, Row } from 'antd';
import lines from '../../assets/img/line.png';

const style = {
  padding: '8px 0',
};

const CategoriesEKB = () => {
  return (
    <>
      <Row>
        <Col span={12}>
          <Divider orientation="left">Популярные категории</Divider>
        </Col>
        <Col span={12}>
          <Divider orientation="right">
            <a href="#">все категории</a>
          </Divider>
        </Col>
      </Row>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        align={'middle'}>
        <Col className="gutter-row" span={4.8}>
          <div style={style}>
            <Space direction="vertical" size={16}>
              <Card
                size="small"
                title="Оптоэлектроника"
                extra={<a href="#">59603</a>}
                style={{
                  width: 400,
                  height: 150,
                  backgroundImage: `url(${lines})`,
                  position: 'relative',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '0% -130%',
                }}>
                <Col span={16}>
                  <h5>Инженеры рекомендуют:</h5>
                  <a href="#">MIKROE-4943</a>
                  <p>Optical Sensors - Development Tools Ambient 18 Click</p>
                </Col>
              </Card>
            </Space>
          </div>
        </Col>
        <Col className="gutter-row" span={4.8}>
          <div style={style}>
            <Space direction="vertical" size={16}>
              <Card
                size="small"
                title="Полупроводниковые приборы"
                extra={<a href="#">302619</a>}
                style={{
                  width: 400,
                  height: 150,
                  backgroundImage: `url(${lines})`,
                  position: 'relative',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '0% -130%',
                }}>
                <Col span={18}>
                  <h5>Инженеры рекомендуют:</h5>
                  <a href="#">TPS92665QPHPRQ1</a>
                  <p>
                    Драйверы систем светодиодного освещения 16-channel low noise
                    LED ...
                  </p>
                </Col>
              </Card>
            </Space>
          </div>
        </Col>
        <Col className="gutter-row" span={4.8}>
          <div style={style}>
            <Space direction="vertical" size={16}>
              <Card
                size="small"
                title="Пассивные компоненты"
                extra={<a href="#">469154</a>}
                style={{
                  width: 400,
                  height: 150,
                  backgroundImage: `url(${lines})`,
                  position: 'relative',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '0% -130%',
                }}>
                <Col span={18}>
                  <h5>Инженеры рекомендуют:</h5>
                  <a href="#">MXO45HST-2I-15M367000</a>
                  <p>
                    Стандартные тактовые генераторы 0015.367000 MHZ Hybrid
                    Circuit
                  </p>
                </Col>
              </Card>
            </Space>
          </div>
        </Col>
        <Col className="gutter-row" span={4.8}>
          <div style={style}>
            <Space direction="vertical" size={16}>
              <Card
                size="small"
                title="Встроенные решения"
                extra={<a href="#">321</a>}
                style={{
                  width: 400,
                  height: 150,
                  backgroundImage: `url(${lines})`,
                  position: 'relative',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '0% -130%',
                }}>
                <Col span={18}>
                  <h5>Инженеры рекомендуют:</h5>
                  <a href="#">BH1790GLC-EVK-001</a>
                  <p>
                    Инструменты разработки оптического датчика Evaluation Kit
                    ...
                  </p>
                </Col>
              </Card>
            </Space>
          </div>
        </Col>
        <Col className="gutter-row" span={4.8}>
          <div style={style}>
            <Space direction="vertical" size={16}>
              <Card
                size="small"
                title="Электромеханический"
                extra={<a href="#">155337</a>}
                style={{
                  width: 400,
                  height: 150,
                  backgroundImage: `url(${lines})`,
                  position: 'relative',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '0% -130%',
                }}>
                <Col span={18}>
                  <h5>Инженеры рекомендуют:</h5>
                  <a href="#">SK42D07G5NS</a>
                  <p>Ползунковые переключатели Miniature Slide Switch</p>
                </Col>
              </Card>
            </Space>
          </div>
        </Col>
        <Col className="gutter-row" span={4.8}>
          <div style={style}>
            <Space direction="vertical" size={16}>
              <Card
                size="small"
                title="Терморегулирование"
                extra={<a href="#">35015</a>}
                style={{
                  width: 400,
                  height: 150,
                  backgroundImage: `url(${lines})`,
                  position: 'relative',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '0% -130%',
                }}>
                <Col span={18}>
                  <h5>Инженеры рекомендуют:</h5>
                  <a href="#">P-TCO-U450/12-2</a>
                  <p>Термические защитные выключатели 50A 12V</p>
                </Col>
              </Card>
            </Space>
          </div>
        </Col>
        <Col className="gutter-row" span={4.8}>
          <div style={style}>
            <Space direction="vertical" size={16}>
              <Card
                size="small"
                title="Соединители"
                extra={<a href="#">678681</a>}
                style={{
                  width: 400,
                  height: 150,
                  backgroundImage: `url(${lines})`,
                  position: 'relative',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '0% -130%',
                }}>
                <Col span={18}>
                  <h5>Инженеры рекомендуют:</h5>
                  <a href="#">PT05P-16-26S(021)</a>
                  <p>Круговой мил / технические характеристики соединителя</p>
                </Col>
              </Card>
            </Space>
          </div>
        </Col>
        <Col className="gutter-row" span={4.8}>
          <div style={style}>
            <Space direction="vertical" size={16}>
              <Card
                size="small"
                title="РЧ и беспроводная связь"
                extra={<a href="#">37579</a>}
                style={{
                  width: 400,
                  height: 150,
                  backgroundImage: `url(${lines})`,
                  position: 'relative',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '0% -130%',
                }}>
                <Col span={18}>
                  <h5>Инженеры рекомендуют:</h5>
                  <a href="#">HMC432E</a>
                  <p>Prescaler InGaP HBT Divide-by-2 SMT, DC - 8 GHz</p>
                </Col>
              </Card>
            </Space>
          </div>
        </Col>
        <Col className="gutter-row" span={4.8}>
          <div style={style}>
            <Space direction="vertical" size={16}>
              <Card
                size="small"
                title="Питание"
                extra={<a href="#">174537</a>}
                style={{
                  width: 400,
                  height: 150,
                  backgroundImage: `url(${lines})`,
                  position: 'relative',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '0% -130%',
                }}>
                <Col span={18}>
                  <h5>Инженеры рекомендуют:</h5>
                  <a href="#">BQ51025YFPT</a>
                  <p>
                    ИС беспроводного зарядного устройства 10W Sgl Chip Wire le
                    ...
                  </p>
                </Col>
              </Card>
            </Space>
          </div>
        </Col>
        <Col className="gutter-row" span={4.8}>
          <div style={style}>
            <Space direction="vertical" size={16}>
              <Card
                size="small"
                title="Кожухи"
                extra={<a href="#">155337</a>}
                style={{
                  width: 400,
                  height: 150,
                  backgroundImage: `url(${lines})`,
                  position: 'relative',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '0% -130%',
                }}>
                <Col span={18}>
                  <h5>Инженеры рекомендуют:</h5>
                  <a href="#">AU-1040-MG</a>
                  <p>
                    Enclosures, Boxes & Cases Utility Cabinet Gray (9 X 6 X 5
                    In)
                  </p>
                </Col>
              </Card>
            </Space>
          </div>
        </Col>
        <Col className="gutter-row" span={4.8}>
          <div style={style}>
            <Space direction="vertical" size={16}>
              <Card
                size="small"
                title="Провода и кабели"
                extra={<a href="#">193386</a>}
                style={{
                  width: 400,
                  height: 150,
                  backgroundImage: `url(${lines})`,
                  position: 'relative',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '0% -130%',
                }}>
                <Col span={18}>
                  <h5>Инженеры рекомендуют:</h5>
                  <a href="#">TGFSB</a>
                  <p>Wire Ducting & Raceways TG FIB Spool Bracket</p>
                </Col>
              </Card>
            </Space>
          </div>
        </Col>
        <Col className="gutter-row" span={4.8}>
          <div style={style}>
            <Space direction="vertical" size={16}>
              <Card
                size="small"
                title="Источники питания"
                extra={<a href="#">81589</a>}
                style={{
                  width: 400,
                  height: 150,
                  backgroundImage: `url(${lines})`,
                  position: 'relative',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '0% -130%',
                }}>
                <Col span={18}>
                  <h5>Инженеры рекомендуют:</h5>
                  <a href="#">0900-0017-01B</a>
                  <p>
                    Стоечные блоки питания POWER SUPPLY BACKPLANE,SINGLE P47,REV
                    B
                  </p>
                </Col>
              </Card>
            </Space>
          </div>
        </Col>
        <Col className="gutter-row" span={4.8}>
          <div style={style}>
            <Space direction="vertical" size={16}>
              <Card
                size="small"
                title="Инвертирующие усилители мощности"
                extra={<a href="#">419</a>}
                style={{
                  width: 400,
                  height: 150,
                  backgroundImage: `url(${lines})`,
                  position: 'relative',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '0% -130%',
                }}>
                <Col span={18}>
                  <h5>Инженеры рекомендуют:</h5>
                  <a href="#">NTS-400P-248</a>
                  <p>
                    Power Inverters 400W 230VAC 48V 10A DC-AC Power Inverter
                  </p>
                </Col>
              </Card>
            </Space>
          </div>
        </Col>
        <Col className="gutter-row" span={4.8}>
          <div style={style}>
            <Space direction="vertical" size={16}>
              <Card
                size="small"
                title="Преобразователи постоянного тока в постоянный"
                extra={<a href="#">66601</a>}
                style={{
                  width: 400,
                  height: 150,
                  backgroundImage: `url(${lines})`,
                  position: 'relative',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '0% -130%',
                }}>
                <Col span={18}>
                  <h5>Инженеры рекомендуют:</h5>
                  <a href="#">1/2A12-N4-F-M</a>
                  <p>
                    Преобразователи постоянного тока в постоянный без изоляции
                    A-Series ...
                  </p>
                </Col>
              </Card>
            </Space>
          </div>
        </Col>
        <Col className="gutter-row" span={4.8}>
          <div style={style}>
            <Space direction="vertical" size={16}>
              <Card
                size="small"
                title="Зарядные устройства для аккумуляторов"
                extra={<a href="#">622</a>}
                style={{
                  width: 400,
                  height: 150,
                  backgroundImage: `url(${lines})`,
                  position: 'relative',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '0% -130%',
                }}>
                <Col span={18}>
                  <h5>Инженеры рекомендуют:</h5>
                  <a href="#">NPB-1700-12</a>
                  <p>Зарядные устройства для аккумуляторов 1428W 90- ...</p>
                </Col>
              </Card>
            </Space>
          </div>
        </Col>
        <Col className="gutter-row" span={4.8}>
          <div style={style}>
            <Space direction="vertical" size={16}>
              <Card
                size="small"
                title="Соединители питания для постоянного тока"
                extra={<a href="#">890</a>}
                style={{
                  width: 400,
                  height: 150,
                  backgroundImage: `url(${lines})`,
                  position: 'relative',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '0% -130%',
                }}>
                <Col span={18}>
                  <h5>Инженеры рекомендуют:</h5>
                  <a href="#">PJ-067B</a>
                  <p>
                    Соединители питания для постоянного тока power jack, 2.5 x
                    ...
                  </p>
                </Col>
              </Card>
            </Space>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CategoriesEKB;
