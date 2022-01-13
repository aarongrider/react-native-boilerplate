import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Platform, ViewStyle} from 'react-native';

import * as Icons from '../../assets/svg';
import {Theme} from './Themes';

type Props = {
  name?: IconNames;
  size?: number;
  color?: string;
  style?: ViewStyle;
};

const Icon = ({name = 'edit', size = 25, color, style = {}}: Props) => {
  const {colors} = useTheme() as Theme;

  const props: any = {
    width: size,
    height: size,
    fill: color ? color : colors.text,
    style,
  };

  switch (name) {
    case 'action':
      return <Icons.Action {...props} />;
    case 'add-s':
      return <Icons.AddS {...props} />;
    case 'add':
      return <Icons.Add {...props} />;
    case 'add-person':
      return <Icons.AddPerson {...props} />;
    case 'arrow-right':
      return <Icons.ArrowRight {...props} />;
    case 'back-ios':
      return <Icons.BackIos {...props} />;
    case 'bar-back-android':
      return <Icons.BarBackAndroid {...props} />;
    case 'bar-menu':
      return <Icons.BarMenu {...props} />;
    case 'block':
      return <Icons.Block {...props} />;
    case 'bolt':
      return <Icons.LightningBolt {...props} />;
    case 'calendar':
      return <Icons.Calendar {...props} />;
    case 'camera':
      return <Icons.Camera {...props} />;
    case 'chart':
      return <Icons.Chart {...props} />;
    case 'check':
      return <Icons.Check {...props} />;
    case 'check-circle':
      return <Icons.CheckCircle {...props} />;
    case 'close':
      return <Icons.Close {...props} />;
    case 'copy':
      return <Icons.Copy {...props} />;
    case 'delete':
      return <Icons.Delete {...props} />;
    case 'download':
      return <Icons.Download {...props} />;
    case 'edit':
      return <Icons.Edit {...props} />;
    case 'emoji-add':
      return <Icons.EmojiAdd {...props} />;
    case 'feedback':
      return <Icons.Feedback {...props} />;
    case 'file':
      return <Icons.File {...props} />;
    case 'file-audio':
      return <Icons.FileAudio {...props} />;
    case 'file-csv':
      return <Icons.FileCsv {...props} />;
    case 'file-file':
      return <Icons.FileFile {...props} />;
    case 'file-pdf':
      return <Icons.FilePdf {...props} />;
    case 'file-text':
      return <Icons.FileText {...props} />;
    case 'file-video':
      return <Icons.FileVideo {...props} />;
    case 'file-zip':
      return <Icons.FileZip {...props} />;
    case 'gif':
      return <Icons.Gif {...props} />;
    case 'heart':
      return <Icons.Heart {...props} />;
    case 'image':
      return <Icons.Image {...props} />;
    case 'info':
      return <Icons.Info {...props} />;
    case 'listen':
      return <Icons.Listen {...props} />;
    case 'notifications':
      return <Icons.Notifications {...props} />;
    case 'notifications-off':
      return <Icons.NotificationsOff {...props} />;
    case 'person':
      return <Icons.Person {...props} />;
    case 'person-circle':
      return <Icons.PersonCircle {...props} />;
    case 'people':
      return <Icons.People {...props} />;
    case 'play':
      return <Icons.Play {...props} />;
    case 'remove-s':
      return <Icons.RemoveS {...props} />;
    case 'remove':
      return <Icons.Remove {...props} />;
    case 'reply':
      return <Icons.Reply {...props} />;
    case 'restart':
      return <Icons.Restart {...props} />;
    case 'send':
      return <Icons.Send {...props} />;
    case 'settings':
      return <Icons.Settings {...props} />;
    case 'share':
      return Platform.OS === 'ios' ? (
        <Icons.ShareIos {...props} />
      ) : (
        <Icons.ShareAndroid {...props} />
      );
    default:
      return <Icons.Check {...props} />;
  }
};
export default Icon;

export const IconList = [
  'action',
  'add-person',
  'add-s',
  'add',
  'arrow-right',
  'back-ios',
  'bar-back-android',
  'bar-menu',
  'calendar',
  'camera',
  'chart',
  'check-circle',
  'check',
  'close',
  'copy',
  'delete',
  'download',
  'edit',
  'emoji-add',
  'feedback',
  'file-audio',
  'file-csv',
  'file-file',
  'file-pdf',
  'file-text',
  'file-video',
  'file-zip',
  'gif',
  'heart',
  'image',
  'info',
  'listen',
  'notifications-off',
  'notifications',
  'person-circle',
  'person',
  'play',
  'remove-s',
  'remove',
  'reply',
  'restart',
  'send',
  'settings',
  'share',
];

// Keep in alphabetical order
export type IconNames =
  | 'action'
  | 'add-person'
  | 'add-s'
  | 'add'
  | 'arrow-right'
  | 'back-ios'
  | 'bar-back-android'
  | 'bar-menu'
  | 'block'
  | 'bolt'
  | 'calendar'
  | 'camera'
  | 'chart'
  | 'check-circle'
  | 'check'
  | 'close'
  | 'copy'
  | 'delete'
  | 'download'
  | 'edit'
  | 'emoji-add'
  | 'feedback'
  | 'file-audio'
  | 'file-csv'
  | 'file-file'
  | 'file-pdf'
  | 'file-text'
  | 'file-video'
  | 'file-zip'
  | 'file'
  | 'gif'
  | 'give'
  | 'heart'
  | 'image'
  | 'info'
  | 'listen'
  | 'notifications-off'
  | 'notifications'
  | 'person-circle'
  | 'person'
  | 'people'
  | 'play'
  | 'remove-s'
  | 'remove'
  | 'reply'
  | 'restart'
  | 'send'
  | 'settings'
  | 'share';
