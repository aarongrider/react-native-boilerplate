import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Text from '../components/Text';
import Spacer from '../components/Spacer';

const InfoScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h2>This is a very long page of information</Text>
      <Spacer />
      <Text p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
        bibendum urna. Donec a mi non enim consectetur maximus malesuada a
        risus. Ut rutrum neque dui, quis facilisis risus commodo nec. Nulla eu
        orci sodales, gravida ligula vel, lacinia velit. In eleifend porttitor
        imperdiet. Fusce a ipsum non diam fermentum mollis in nec odio.
        Vestibulum maximus ante ut ligula suscipit, sagittis congue neque
        dapibus. Curabitur cursus vehicula ornare. Nullam sit amet condimentum
        erat. Etiam placerat turpis a nunc condimentum ultricies. Cras
        ullamcorper, tellus id rutrum suscipit, tortor lacus elementum nunc, non
        gravida leo dolor semper elit. Vestibulum gravida tellus nec odio
        sollicitudin venenatis. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. Pellentesque eleifend tempor augue, non lacinia tellus.
        Maecenas sed ex quis ex sollicitudin luctus. Aliquam est sem,
        ullamcorper eu vestibulum quis, gravida sed nisi. Nunc vehicula, est eu
        rutrum ullamcorper, erat tellus tempus magna, id iaculis mi quam id
        lectus. Nam tempor, felis eget lobortis convallis, tortor ante porttitor
        massa, sit amet luctus orci arcu pulvinar ex. Phasellus eget aliquet
        sapien. Donec nec eleifend diam, lacinia venenatis orci. Integer
        vulputate, libero vitae lobortis rhoncus, ante augue aliquet eros, et
        molestie urna nisi id nisi. Mauris rutrum quis metus eget porttitor. Nam
        sit amet tincidunt diam. Aenean tincidunt est ut arcu sollicitudin, nec
        venenatis sem fermentum. Nunc vehicula sollicitudin neque, eu volutpat
        dui lacinia id. Maecenas non eleifend risus. Suspendisse nec quam
        ultrices, placerat arcu ut, finibus ipsum. Maecenas eu scelerisque eros.
        Integer mollis nulla et malesuada molestie. Morbi bibendum arcu ac enim
        elementum sollicitudin. Curabitur eget tortor odio. In hac habitasse
        platea dictumst. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Ut pharetra velit rhoncus nibh
        malesuada sollicitudin. Ut sed aliquam purus. Nunc egestas sit amet
        magna eu faucibus. Nunc luctus diam vulputate, vulputate turpis vel,
        ultricies sapien. Morbi convallis purus nisi, ut scelerisque orci
        hendrerit in. Cras a finibus nisl. Nunc ultricies, arcu eget condimentum
        eleifend, sem ligula blandit neque, sed hendrerit metus massa
        sollicitudin risus. Nulla non odio mi.
      </Text>
    </ScrollView>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
