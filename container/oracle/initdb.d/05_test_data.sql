alter session set container = XEPDB1;

-- Special characters such as the ampersand will result in prompt without this directive.
SET DEFINE OFF;

-- Sync Rules
INSERT INTO JAWS_OWNER.SYNC_RULE (SYNC_RULE_ID, ACTION_ID, SYNC_SERVER_ID, QUERY, SCREEN_COMMAND, PV, DESCRIPTION, PROPERTY_EXPRESSION) VALUES (6, 127, 1, 't=RFCavity', null, '{EPICSName}ALM03', null, null);
INSERT INTO JAWS_OWNER.SYNC_RULE (SYNC_RULE_ID, ACTION_ID, SYNC_SERVER_ID, QUERY, SCREEN_COMMAND, PV, DESCRIPTION, PROPERTY_EXPRESSION) VALUES (8, 77, 1, 't=IOC', 'OTFLauncher ioc iocscreen -name {ElementName}', '{ElementName}:PPC750temp', 'MVME2700 and MVME5100 IOCs', '!unpowered&!hallcontrolled&^EPICSVersion&FunctionalType=''PRODUCTION''&Status=''AVAILABLE''&(Model=''MVME2700''|Model=''MVME5100'')');
INSERT INTO JAWS_OWNER.SYNC_RULE (SYNC_RULE_ID, ACTION_ID, SYNC_SERVER_ID, QUERY, SCREEN_COMMAND, PV, DESCRIPTION, PROPERTY_EXPRESSION) VALUES (9, 79, 1, 't=IOC', 'OTFLauncher ioc iocscreen -name {ElementName}', '{ElementName}:memfree', '3.13 IOCs', '!unpowered&!hallcontrolled&EPICSVersion=regexp(''R3.13'')&FunctionalType=''PRODUCTION''&Status=''AVAILABLE''');
INSERT INTO JAWS_OWNER.SYNC_RULE (SYNC_RULE_ID, ACTION_ID, SYNC_SERVER_ID, QUERY, SCREEN_COMMAND, PV, DESCRIPTION, PROPERTY_EXPRESSION) VALUES (11, 82, 1, 't=IOC', 'OTFLauncher ioc iocscreen -name {ElementName}', '{ElementName}:ioc_sr', 'HasEnumRestore IOCs', '!unpowered&!hallcontrolled&^EPICSVersion&FunctionalType=''PRODUCTION''&Status=''AVAILABLE''&^HasEnumRestore');
INSERT INTO JAWS_OWNER.SYNC_RULE (SYNC_RULE_ID, ACTION_ID, SYNC_SERVER_ID, QUERY, SCREEN_COMMAND, PV, DESCRIPTION, PROPERTY_EXPRESSION) VALUES (12, 78, 1, 't=IOC', 'OTFLauncher ioc iocscreen -name {ElementName}', 'softalarms:{ElementName}', 'Production IOCs', '!unpowered&!hallcontrolled&^EPICSVersion&FunctionalType=''PRODUCTION''&Status=''AVAILABLE''');
INSERT INTO JAWS_OWNER.SYNC_RULE (SYNC_RULE_ID, ACTION_ID, SYNC_SERVER_ID, QUERY, SCREEN_COMMAND, PV, DESCRIPTION, PROPERTY_EXPRESSION) VALUES (16, 116, 1, 't=ODH&a=A_HallD&a=A_Injector&a=A_NorthLinac&a=A_SouthLinac', 'OTFLauncher odh odhspikes', '{EPICSName}', 'Hall D, Inj, NL, and SL ODH ', null);
INSERT INTO JAWS_OWNER.SYNC_RULE (SYNC_RULE_ID, ACTION_ID, SYNC_SERVER_ID, QUERY, SCREEN_COMMAND, PV, DESCRIPTION, PROPERTY_EXPRESSION) VALUES (17, 80, 1, 't=VME&t=PC104', 'OTFLauncher ioc iocscreen -name {ElementName}', '{ElementName}:memblock', '3.14 and 3.15 VME and PC104 IOCs', '!unpowered&!hallcontrolled&(EPICSVersion=regexp(''R3.14'')|EPICSVersion=regexp(''R3.15''))&FunctionalType=''PRODUCTION''&Status=''AVAILABLE''');
INSERT INTO JAWS_OWNER.SYNC_RULE (SYNC_RULE_ID, ACTION_ID, SYNC_SERVER_ID, QUERY, SCREEN_COMMAND, PV, DESCRIPTION, PROPERTY_EXPRESSION) VALUES (1, 116, 1, 't=ODH&a=A_HallA&a=A_HallB&a=A_HallC', 'OTFLauncher odh odhspikes', '{EPICSName}C', 'Hall A, B, and C ODH', null);
INSERT INTO JAWS_OWNER.SYNC_RULE (SYNC_RULE_ID, ACTION_ID, SYNC_SERVER_ID, QUERY, SCREEN_COMMAND, PV, DESCRIPTION, PROPERTY_EXPRESSION) VALUES (4, 77, 1, 't=IOC', 'OTFLauncher ioc iocscreen -name {ElementName}', '{ElementName}:PPC745temp', 'MVME6100 IOCs', '!unpowered&!hallcontrolled&^EPICSVersion&FunctionalType=''PRODUCTION''&Status=''AVAILABLE''&Model=''MVME6100''');
INSERT INTO JAWS_OWNER.SYNC_RULE (SYNC_RULE_ID, ACTION_ID, SYNC_SERVER_ID, QUERY, SCREEN_COMMAND, PV, DESCRIPTION, PROPERTY_EXPRESSION) VALUES (5, 79, 1, 't=IOC', 'OTFLauncher ioc iocscreen -name {ElementName}', '{ElementName}:MEM_FREE', '3.14 and 3.15 IOCs', '!unpowered&!hallcontrolled&(EPICSVersion=regexp(''R3.14'')|EPICSVersion=regexp(''R3.15''))&FunctionalType=''PRODUCTION''&Status=''AVAILABLE''');
INSERT INTO JAWS_OWNER.SYNC_RULE (SYNC_RULE_ID, ACTION_ID, SYNC_SERVER_ID, QUERY, SCREEN_COMMAND, PV, DESCRIPTION, PROPERTY_EXPRESSION) VALUES (7, 80, 1, 't=SoftIOC', 'OTFLauncher ioc iocscreen -name {ElementName}', '{ElementName}:MEM_BLK_FREE', '3.14 and 3.15 Soft IOCs', '!unpowered&!hallcontrolled&(EPICSVersion=regexp(''R3.14'')|EPICSVersion=regexp(''R3.15''))&FunctionalType=''PRODUCTION''&Status=''AVAILABLE''');
INSERT INTO JAWS_OWNER.SYNC_RULE (SYNC_RULE_ID, ACTION_ID, SYNC_SERVER_ID, QUERY, SCREEN_COMMAND, PV, DESCRIPTION, PROPERTY_EXPRESSION) VALUES (10, 80, 1, 't=IOC', 'OTFLauncher ioc iocscreen -name {ElementName}', '{ElementName}:memblock', '3.13 IOCs', '!unpowered&!hallcontrolled&EPICSVersion=regexp(''R3.13'')&FunctionalType=''PRODUCTION''&Status=''AVAILABLE''');
INSERT INTO JAWS_OWNER.SYNC_RULE (SYNC_RULE_ID, ACTION_ID, SYNC_SERVER_ID, QUERY, SCREEN_COMMAND, PV, DESCRIPTION, PROPERTY_EXPRESSION) VALUES (13, 83, 1, 't=IOC', 'OTFLauncher ioc iocscreen -name {ElementName}', '{ElementName}:Synch30Hz', 'Sync30Hz IOCs', '!unpowered&!hallcontrolled&^EPICSVersion&FunctionalType=''PRODUCTION''&Status=''AVAILABLE''&^Sync30Hz');
INSERT INTO JAWS_OWNER.SYNC_RULE (SYNC_RULE_ID, ACTION_ID, SYNC_SERVER_ID, QUERY, SCREEN_COMMAND, PV, DESCRIPTION, PROPERTY_EXPRESSION) VALUES (15, 116, 1, 't=ODH&a=A_CHL', 'OTFLauncher odh odhspikes', '{ElementName}', 'CHL ODH', null);

DROP SEQUENCE JAWS_OWNER.SYNC_RULE_ID;
CREATE SEQUENCE JAWS_OWNER.SYNC_RULE_ID
    INCREMENT BY 1
    START WITH 20
    NOCYCLE
    NOCACHE
    ORDER;

-- Alarms
INSERT INTO JAWS_OWNER.ALARM (ALARM_ID, ACTION_ID, NAME, DEVICE, SCREEN_COMMAND, MASKED_BY, PV, MANAGED_BY, SYNC_ELEMENT_ID, SYNC_RULE_ID) VALUES (1, 2, 'IDA0I04 Gun Position', null, null, null, 'IDA0I04T', null, null, null);
INSERT INTO JAWS_OWNER.ALARM (ALARM_ID, ACTION_ID, NAME, DEVICE, SCREEN_COMMAND, MASKED_BY, PV, MANAGED_BY, SYNC_ELEMENT_ID, SYNC_RULE_ID) VALUES (3, 2, 'IFY0IA1 Aperture Position', null, null, null, 'VRD0IA1AbsPosR', null, null, null);
INSERT INTO JAWS_OWNER.ALARM (ALARM_ID, ACTION_ID, NAME, DEVICE, SCREEN_COMMAND, MASKED_BY, PV, MANAGED_BY, SYNC_ELEMENT_ID, SYNC_RULE_ID) VALUES (10, 2, 'ISL0I04D Gun Position', null, null, null, 'ISL0I04DT', null, null, null);
INSERT INTO JAWS_OWNER.ALARM (ALARM_ID, ACTION_ID, NAME, DEVICE, SCREEN_COMMAND, MASKED_BY, PV, MANAGED_BY, SYNC_ELEMENT_ID, SYNC_RULE_ID) VALUES (6720, 89, 'Cathode X Laser Position', null, null, null, 'psub_cx_pos', null, null, null);
INSERT INTO JAWS_OWNER.ALARM (ALARM_ID, ACTION_ID, NAME, DEVICE, SCREEN_COMMAND, MASKED_BY, PV, MANAGED_BY, SYNC_ELEMENT_ID, SYNC_RULE_ID) VALUES (6721, 89, 'Cathode Y Laser Position', null, null, null, 'psub_cy_pos', null, null, null);

DROP SEQUENCE JAWS_OWNER.ALARM_ID;
CREATE SEQUENCE JAWS_OWNER.ALARM_ID
    INCREMENT BY 1
    START WITH 8000
    NOCYCLE
    NOCACHE
    ORDER;

-- Alarm_locations
INSERT INTO JAWS_OWNER.ALARM_LOCATION (ALARM_ID, LOCATION_ID) VALUES (1, 5);
INSERT INTO JAWS_OWNER.ALARM_LOCATION (ALARM_ID, LOCATION_ID) VALUES (3, 15);
INSERT INTO JAWS_OWNER.ALARM_LOCATION (ALARM_ID, LOCATION_ID) VALUES (10, 5);
INSERT INTO JAWS_OWNER.ALARM_LOCATION (ALARM_ID, LOCATION_ID) VALUES (6720, 5);
INSERT INTO JAWS_OWNER.ALARM_LOCATION (ALARM_ID, LOCATION_ID) VALUES (6721, 5);