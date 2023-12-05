alter session set container = XEPDB1;

-- Special characters such as the ampersand will result in prompt without this directive.
SET DEFINE OFF;

-- Classes
INSERT INTO JAWS_OWNER.CLASS (CLASS_ID, CATEGORY_ID, NAME, PRIORITY, RATIONALE, CORRECTIVE_ACTION, POINT_OF_CONTACT, FILTERABLE, LATCHABLE, ON_DELAY_SECONDS, OFF_DELAY_SECONDS) VALUES (1, 1, 'Position', 'P3_MINOR', 'Rationale goes here', 'Corrective action goes here', 'INJ', 'Y', 'N', 10, null);
INSERT INTO JAWS_OWNER.CLASS (CLASS_ID, CATEGORY_ID, NAME, PRIORITY, RATIONALE, CORRECTIVE_ACTION, POINT_OF_CONTACT, FILTERABLE, LATCHABLE, ON_DELAY_SECONDS, OFF_DELAY_SECONDS) VALUES (2, 1, 'Interception', 'P3_MINOR', 'Rationale goes here', 'Corrective action goes here', 'INJ', 'Y', 'N', 10, null);

-- Instances
INSERT INTO JAWS_OWNER.INSTANCE (INSTANCE_ID, CLASS_ID, NAME, DEVICE, SCREEN_COMMAND, MASKED_BY) VALUES (1, 1, 'Central Plug', null, null, null);
INSERT INTO JAWS_OWNER.INSTANCE (INSTANCE_ID, CLASS_ID, NAME, DEVICE, SCREEN_COMMAND, MASKED_BY) VALUES (2, 2, 'IFY0IA1 Interception', null, null, null);
INSERT INTO JAWS_OWNER.INSTANCE (INSTANCE_ID, CLASS_ID, NAME, DEVICE, SCREEN_COMMAND, MASKED_BY) VALUES (3, 1, 'IFY0IA1 Position', null, null, null);
INSERT INTO JAWS_OWNER.INSTANCE (INSTANCE_ID, CLASS_ID, NAME, DEVICE, SCREEN_COMMAND, MASKED_BY) VALUES (4, 2, 'IFY0IA2 Interception', null, null, null);
INSERT INTO JAWS_OWNER.INSTANCE (INSTANCE_ID, CLASS_ID, NAME, DEVICE, SCREEN_COMMAND, MASKED_BY) VALUES (5, 2, 'IFY0IA3 Interception', null, null, null);
INSERT INTO JAWS_OWNER.INSTANCE (INSTANCE_ID, CLASS_ID, NAME, DEVICE, SCREEN_COMMAND, MASKED_BY) VALUES (6, 2, 'IFY0IA4 Interception', null, null, null);
INSERT INTO JAWS_OWNER.INSTANCE (INSTANCE_ID, CLASS_ID, NAME, DEVICE, SCREEN_COMMAND, MASKED_BY) VALUES (7, 2, 'ISLK302 Interception', null, null, null);
INSERT INTO JAWS_OWNER.INSTANCE (INSTANCE_ID, CLASS_ID, NAME, DEVICE, SCREEN_COMMAND, MASKED_BY) VALUES (8, 2, 'ISLK401 Interception', null, null, null);
INSERT INTO JAWS_OWNER.INSTANCE (INSTANCE_ID, CLASS_ID, NAME, DEVICE, SCREEN_COMMAND, MASKED_BY) VALUES (9, 2, 'ISLK403 Interception', null, null, null);
INSERT INTO JAWS_OWNER.INSTANCE (INSTANCE_ID, CLASS_ID, NAME, DEVICE, SCREEN_COMMAND, MASKED_BY) VALUES (10, 1, 'Master Slit', null, null, null);
